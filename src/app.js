const express = require('express');
const {Server} = require('socket.io');

const app = express();
let log = [];

app.use(express.static('./src/public'));

serverHttp = app.listen(8080,()=>console.log('Server is running on port 8080'));

// const server = app.listen(8080, () => {
//     console.log('Server is running on port 8080');
// });   



const serverSocket = new Server(serverHttp);

serverSocket.on('connection', (socket) => {
    console.log(`socket id ${socket.id} connected .....`)
    serverSocket.emit('history',log)
    socket.on('message', (data) => {
        console.log(data);
        log.push({userId:socket.id, texto:data});
        serverSocket.emit('history',log)
    });
});