import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateRoom from './components/CreateRoom';
import JoinRoom from './components/JoinRoom';
import Home from './components/Home';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create_room' component={CreateRoom} />
          <Route exact path='/join_room' component={JoinRoom} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
