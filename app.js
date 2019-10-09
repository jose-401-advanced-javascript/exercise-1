const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('hello', () => {
  console.log('Hi');
});

setInterval(() => {
  socket.emit('log', 'string')
}, 1000)