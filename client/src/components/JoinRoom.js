import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const JoinRoom = ({playerName, setPlayerName}) => {
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <div>
      <Link to='/'>
        <Button color='primary' style={{ fontSize: '30px', color: blue[300] }}>
          Back
        </Button>
      </Link>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>Join A Room</h1>{' '}
        <TextField
          id='standard-basic'
          label='Your Name'
          style={{ width: '400px' }}
          value={playerName}
          onChange={handleChange}
        />
        <Link to='/lobby'>
          <Button
            variant='contained'
            color='primary'
            size='large'
            style={{ margin: '20px' }}
          >
            The lobby
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default JoinRoom;
