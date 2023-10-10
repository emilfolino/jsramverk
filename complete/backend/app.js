require('dotenv').config()

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const ordersModel = require('./models/orders');
const productsModel = require('./models/products');
const orderItemsModel = require('./models/order_items');
const authModel = require('./models/auth');

const visual = true;
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema
} = require("graphql");

const RootQueryType = require("./graphql/root.js");

const app = express();
const httpServer = require("http").createServer(app);

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:9000",
        methods: ["GET", "POST"]
    }
});

const port = process.env.PORT || 1337;

const schema = new GraphQLSchema({
    query: RootQueryType
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: visual,
}));

app.get('/', (req, res) => {
    return res.json({
        data: 'Hello World!'
    });
});

app.get('/token', (req, res) => authModel.createToken(req, res));

app.get('/orders',
    (req, res, next) => authModel.checkToken(req, res, next),
    async (req, res) => {
        return res.json({
            data: await ordersModel.getOrders()
        });
    }
);

let orders = [];

io.sockets.on('connection', async function(socket) {
    console.log(socket.id); // Nått lång och slumpat

    orders.map((order) => {
        order.locked = false;

        return order;
    });

    socket.emit("orders", orders);

    socket.on("lockSocket", function(data) {
        orders.forEach((order) => {
            if (order.rowid === data) {
                order.locked = true;
            }
        });

        io.emit("orders", orders);
    });

    socket.on("changeStatus", async function(data) {
        orders.forEach((order) => {
            if (order.rowid === data) {
                order.locked = false;
                order.status = 200;
            }
        });

        await ordersModel.changeStatus(data);

        io.emit("orders", orders);
    });
});

httpServer.listen(port, async () => {
    orders = await ordersModel.getOrders();
    console.log(`Example app listening on port ${port}`);
});
