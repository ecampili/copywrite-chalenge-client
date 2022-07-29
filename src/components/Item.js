import { Paper, Box, Typography, Chip } from '@mui/material';
import React from 'react';

const Item = ({ item }) => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Typography
          variant="p"
          display="flex"
          justifyContent="space-between"
          alignItems="start"
        >
          {item.text}{' '}
          {item.palindrome && (
            <Chip
              label="Palindrome"
              variant="filled"
              color="success"
              size="small"
            />
          )}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Item;
