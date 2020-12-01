const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:5000',
    credentials: true,
  },
});

// Run when client connects
io.on('connection', (socket) => {
  console.log('new web socket connection...');

  socket.emit('message', 'Welcome to Coup!');

  // Broadcast when a user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  // Listen for room 1 connections
  socket.on('room', (num) => {
    console.log(`A user has joined room ${num}`);
  });
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
