import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const JoinRoom = () => {
  return (
    <div>
      <Link to='/'>
        <Button color='primary' style={{ fontSize: '30px', color: blue[300] }}>
          Back
        </Button>
      </Link>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>Join A Room</h1>{' '}
        <Link to='/lobby'>
          <Button variant='contained' color='primary' size='large'>
            The lobby
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default JoinRoom;
