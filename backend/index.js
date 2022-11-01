const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000

io.on("connection", socket => {
    console.log("user connected")
    socket.on("chat message", msg => {
        console.log(msg)
    })
})

server.listen(port, () => console.log("server runnig on port: " + port))