const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.options('*', cors());

app.disable('x-powered-by');

const port = process.env.PORT || 1337;

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

const cakes = [
    { name: "Tårta", price: 50 },
    { name: "Mandelkubb", price: 5 },
    { name: "Dammsugare", price: 10 },
];

app.get("/", (req, res) => res.json({ data: cakes }));

const server = app.listen(port, () => console.log('Order api listening on port ' + port));

module.exports = server;
