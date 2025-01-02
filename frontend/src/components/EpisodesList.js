import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const EpisodesList = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
        No episodes available.
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Episodes
      </Typography>
      <List>
        {episodes.map((episode) => (
          <ListItem key={episode.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={`S${episode.season}E${episode.number}: ${episode.name}`}
              secondary={`Airdate: ${episode.airdate}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EpisodesList;
