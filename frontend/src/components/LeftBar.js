import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

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
        <ListItem button>
          <ListItemText primary="Search Shows" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftBar;
