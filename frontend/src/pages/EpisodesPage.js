import React from 'react';
import { Box, Typography } from '@mui/material';
import EpisodesList from '../components/EpisodesList';
import { useAppContext } from '../context/AppContext';

const EpisodesPage = () => {
  const { episodes } = useAppContext();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Episodes
      </Typography>
      <EpisodesList episodes={episodes} />
    </Box>
  );
};

export default EpisodesPage;
