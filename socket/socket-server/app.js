const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.set('origins', 'https://socket-client.jsramverk.me:443');
io.set('origins', 'https://socket-client.jsramverk.me:80');

io.on('connection', function (socket) {
    console.info("User connected");

    socket.on('chat message', function (message) {
        io.emit('chat message', message);
    });
});

server.listen(8300);
