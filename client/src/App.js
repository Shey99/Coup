import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import Lobby from './components/Lobby';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create_room' component={CreateRoom} />
          <Route exact path='/join_room' component={JoinRoom} />
          <Route exact path='/lobby' component={Lobby} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
