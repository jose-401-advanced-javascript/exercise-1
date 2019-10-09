const io = require('socket.io')(7890);

io.on('connect', socket => {
  socket.emit('hello');

  socket.on('log', data => {
    console.log(data);
  })
});
