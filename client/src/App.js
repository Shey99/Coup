import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import Lobby from './components/Lobby';

import './App.css';

const App = () => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create_room' component={CreateRoom} />
          <Route
            exact
            path='/join_room'
            render={(props) => (
              <JoinRoom {...props} playerName={playerName} setPlayerName={setPlayerName} />
            )}
          />
          <Route exact path='/lobby'  render={(props) => (
              <Lobby {...props} playerName={playerName} />
            )} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
