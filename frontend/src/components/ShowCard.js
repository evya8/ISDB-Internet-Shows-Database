import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppContext } from '../context/AppContext';

const ShowCard = ({ show, onViewEpisodes }) => {
  const { addFavorite, removeFavorite, isFavorite } = useAppContext();

  const handleToggleFavorite = () => {
    if (isFavorite(show.id)) {
      removeFavorite(show.id);
    } else {
      addFavorite(show);
    }
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
      {show.image && (
        <CardMedia
          component="img"
          image={show.image}
          alt={show.name}
          sx={{ height: 300, objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{show.name}</Typography>
          <IconButton onClick={handleToggleFavorite}>
            {isFavorite(show.id) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Genres: {show.genres.join(', ')}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Rating: {show.rating || 'N/A'}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onViewEpisodes(show.id)}>
          View Episodes
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShowCard;
