const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '/',
    credentials: true,
  },
});

var players = [];

// Run when client connects
io.on('connection', (socket) => {
  const currentLobby = socket.request._query.lobby;
  console.log(`Joined ${currentLobby}`);

  // Join lobby
  socket.join(currentLobby);

  // add new player
  socket.on('newPlayer', (newPlayer) => {
    players.push(newPlayer);
    io.to(currentLobby).emit('loadPlayers', players);
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    players.pop();
    io.to(currentLobby).emit('loadPlayers', players);
    console.log('Socket disconnnected');
  });
});

app.get('lobby', (req, res) => {
  console.log('lobby connected');
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
