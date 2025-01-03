import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: 'background.paper',
        position: 'fixed',
        left: 0,
        height: '100vh',
        p: 2,
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Navigation
      </Typography>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Search Shows" />
        </ListItem>
        <ListItem button component={Link} to="/favorites">
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftBar;
