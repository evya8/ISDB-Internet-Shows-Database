import React from 'react';
import { Box, Typography } from '@mui/material';
import Favorites from '../components/Favorites';

const FavoritesPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Your Favorite Shows
      </Typography>
      <Favorites />
    </Box>
  );
};

export default FavoritesPage;
