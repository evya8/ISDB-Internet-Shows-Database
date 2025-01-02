import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const RightBar = () => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: 'background.paper',
        position: 'fixed',
        right: 0,
        height: '100vh',
        p: 2,
        overflowY: 'auto',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Highlights
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Top Rated Show: Breaking Bad" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trending: Stranger Things" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Upcoming: Loki Season 2" />
        </ListItem>
      </List>
    </Box>
  );
};

export default RightBar;
