const express = require('express');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const io = new Server(server);

const host = 'localhost';
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});