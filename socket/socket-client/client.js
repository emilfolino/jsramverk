import io from 'socket.io-client';

const newMessage = document.getElementById("new-message");
const allMessages = document.getElementById("all-messages");

const socket = io('http://localhost:3000');

socket.on('connect', function() {
    socket.on('chat message', function (message) {
        let addedMessage = document.createElement("p");

        addedMessage.textContent = message;

        allMessages.appendChild(addedMessage);
    });

    newMessage.addEventListener("keyup", function (event) {
        if (event.code === "Enter") {
            socket.emit('chat message', event.target.value);
            event.target.value = "";
        }
    });
});

socket.on('disconnect', function() {
    console.info("Disconnected");
});
