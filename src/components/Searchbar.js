import TextField from '@mui/material/TextField';

import React, { useState } from 'react';
import { Button } from '@mui/material';

const Searchbar = ({ input, setInput }) => {
  return (
    <form
      style={{
        minWidth: '50%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <TextField
        id="search-bar"
        className="text"
        variant="outlined"
        placeholder="Insert Text ..."
        size="small"
        sx={{
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '0.375rem',
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: '15px', px: '10px', width: '100px', fontWeight: 'bold' }}
      >
        Send
      </Button>
    </form>
  );
};

export default Searchbar;
