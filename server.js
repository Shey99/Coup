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

  // Join lobby
  socket.join(currentLobby);

  const currentRoom = io.sockets.adapter.rooms.get(currentLobby);

  const loadPlayers = () => {
    let playerNames = [];
    for (entry of players) {
      playerNames.push(entry.name);
    }
    return playerNames;
  };

  const deleteDisconnectedPlayer = () => {
    for (let i = 0; i < players.length; i++) {
      if (!currentRoom.has(players[i].id)) {
        console.log(`${players[i].name} has left ${currentLobby}`);
        players.splice(i, 1);
      }
    }
  };

  // Add new player
  socket.on('newPlayer', (newPlayer) => {
    players.push({ name: newPlayer, id: socket.id });
    io.to(currentLobby).emit('loadPlayers', loadPlayers());
    console.log(`${newPlayer} joined ${currentLobby}`);
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    deleteDisconnectedPlayer();
    io.to(currentLobby).emit('loadPlayers', loadPlayers());
    console.log('Socket disconnnected');
  });
});

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
