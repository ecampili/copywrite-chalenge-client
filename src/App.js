import { Box, Container, Stack, Paper } from '@mui/material';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Typography from '@mui/material/Typography';

import Item from './components/Item';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!input) return;
    setError(null);

    // const url = `http://localhost:5000/api/iecho?text=${input}`;
    const url = `https://copywrite-ecampili.herokuapp.com/api/iecho?text=${input}`;
    const response = await fetch(url);

    const data = await response.json();

    if (data.error) {
      setError('Debes ingresar un texto');
      return;
    }

    setList([data, ...list]);
    setInput('');
  };

  return (
    <div className="App">
      <Navbar
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        setError={setError}
      />
      <Container p={5} sx={{ maxWidth: '600px', paddingTop: 5 }}>
        {error && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <Typography
              p={'0 15px'}
              variant="h6"
              sx={{ color: 'white', fontSize: '1rem', backgroundColor: 'red' }}
            >
              {error}
            </Typography>
          </Box>
        )}
        <Paper sx={{ minHeight: '500px' }}>
          <Box p={5}>
            <Typography variant="h6">Results:</Typography>
            <Box px={10} py={5}>
              <Stack spacing={2}>
                {list &&
                  list.map((item, idx) => <Item key={idx} item={item} />)}
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
