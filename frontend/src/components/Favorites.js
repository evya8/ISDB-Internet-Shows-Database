import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppContext } from '../context/AppContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useAppContext();

  if (favorites.length === 0) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', mt: 2 }}>
        No favorite shows yet!
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Your Favorite Shows
      </Typography>
      <List>
        {favorites.map((show) => (
          <ListItem
            key={show.id}
            sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd' }}
          >
            <ListItemText
              primary={show.name}
              secondary={`Genres: ${show.genres.join(', ')}`}
            />
            <IconButton edge="end" onClick={() => removeFavorite(show.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Favorites;
