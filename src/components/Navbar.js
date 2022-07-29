import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

//import Searchbar from './Searchbar';
import { Button, TextField } from '@mui/material';

const Navbar = ({ input, setInput, handleSubmit, setError }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#dc3545' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* <Searchbar input={input} setInput={setInput} /> */}
          <form
            onSubmit={handleSubmit}
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
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(null);
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                ml: '15px',
                px: '10px',
                width: '100px',
                fontWeight: 'bold',
              }}
            >
              Send
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
