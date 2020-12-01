import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');

  const handleOnChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    console.log(`You created ${roomName} !!`);
  };

  return (
    <div>
      <Link to='/'>
        <Button color='primary' style={{ fontSize: '30px', color: blue[300] }}>
          Back
        </Button>
      </Link>
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='column'
        style={{ height: '50vh' }}
      >
        <h1>Create A Room</h1>
        <form autoComplete='off' onSubmit={handleCreateRoom}>
          <Grid
            container
            justify='center'
            style={{ margin: '32px', transform: 'scale(1.2)' }}
          >
            <TextField
              id='standard-basic'
              label='Room Name'
              style={{ width: '300px' }}
              value={roomName}
              onChange={handleOnChange}
            />
            <Button
              variant='contained'
              color='secondary'
              size='medium'
              onClick={handleCreateRoom}
            >
              Create Room
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default CreateRoom;
