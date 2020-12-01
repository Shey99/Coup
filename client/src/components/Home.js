import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

const Home = () => {
  return (
    <Grid style={{height: '100vh'}}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{ height: '50vh', fontSize: '60px'}}
      >
        <h1>COUP</h1>
        <h6>Bluff (and call bluffs!) to victory in this card game with no third chances!</h6>
      </Grid>
      <Grid container justify='center' spacing={4}>
        <Grid item>
          <Link to='/create_room'>
            <Button variant='contained' color='primary' size='large'>
              Create A Room
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to='/join_room'>
            <Button variant='contained' color='secondary' size='large'>
              Join A Room
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
