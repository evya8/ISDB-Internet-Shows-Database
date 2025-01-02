import React from 'react';
import {  Typography, Grid2 , Paper} from '@mui/material';

const EpisodesList = ({ episodes }) => {
  const uniqueEpisodes = episodes.filter(
      (episode, index, self) =>
          index === self.findIndex((e) => e.id === episode.id)
  );

  if (uniqueEpisodes.length === 0) {
      return (
          <Typography
              variant="h6"
              color="text.secondary"
              align="center"
              sx={{ marginTop: 2 }}
          >
              No episodes available for this show.
          </Typography>
      );
  }

  return (
      <Grid2 container spacing={3} sx={{ marginTop: 4 }}>
          {uniqueEpisodes.map((episode) => (
              <Grid2 item xs={12} sm={6} md={4} key={episode.id}>
                  <Paper
                      elevation={3}
                      sx={{
                          padding: 2,
                          backgroundColor: "#1e1e1e",
                          color: "#ffffff",
                      }}
                  >
                      <Typography variant="h6">{episode.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                          Season {episode.season}, Episode {episode.episode_number}
                      </Typography>
                      <Typography variant="body2">{episode.description}</Typography>
                  </Paper>
              </Grid2>
          ))}
      </Grid2>
  );
};

export default EpisodesList;
