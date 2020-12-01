import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const JoinRoom = () => {
  return (
    <div>
      <Link to='/'>
        <Button
          color='primary'
          style={{ 'fontSize': '30px', color: blue[300] }}
        >
          Back
        </Button>
      </Link>
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <h1>Join A Room</h1>
      </Grid>
    </div>
  );
};

export default JoinRoom;
