const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const ordersModel = require('./models/orders');
const productsModel = require('./models/products');
const orderItemsModel = require('./models/order_items');

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

app.get('/', (req, res) => {
    return res.json({
        data: 'Hello World!'
    });
});

app.get('/orders', async (req, res) => {
    return res.json({
        data: await ordersModel.getOrders()
    });
});

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

output();

async function output() {
    const orders = await ordersModel.getOrders();
    const product = await productsModel.getProduct(1);
    const orderItems = await orderItemsModel.getOrderItems(1);

    console.log(orders);
    console.log(product);
    console.log(orderItems);
}
