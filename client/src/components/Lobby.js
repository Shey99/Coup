import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

let socket;

const Lobby = () => {
  const [players, setPlayers] = useState([]);

  // random names
  const names = ['sam', 'anthony', 'melissa', 'ashley', 'robert', 'jake'];
  const playerName = names[Math.floor(Math.random() * 5)];

  const newPlayer = () => {
    const playerList = [...players, playerName];
    socket.emit('newPlayer', playerList);
  };

  useEffect(() => {
    socket = io.connect('/', { query: { lobby: "Shey's lobby" } });
    newPlayer();
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    socket.on('loadPlayers', (players) => {
      setPlayers([...players]);
    });
  });

  return (
    <div>
      <Link to='/'>
        <Button color='primary' style={{ fontSize: '30px', color: blue[300] }}>
          Back
        </Button>
      </Link>
      <h1>The Game Lobby</h1>
      <h2>People in lobby:</h2>
      {players.map((player, index) => (
        <div key={index}> {player}</div>
      ))}
    </div>
  );
};

export default Lobby;
