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
                    backgroundColor: "#2c2c2c", 
                    color: "#1976D2", 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    border: "1px solid #444", 
                    borderRadius: "8px",
                    width: "250px",
                }}
            >
                {episode.image && (
                    <img
                        src={episode.image.medium || episode.image.original || episode.image }
                        alt={episode.name}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                            marginBottom: "16px",
                        }}
                    />
                )}
                <Typography
                    variant="h6"
                    sx={{
                        marginBottom: 1,
                        fontWeight: "bold",
                        color: "#1976D20", 
                    }}
                >
                    {episode.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="#bbbbbb"
                    sx={{ marginBottom: 1 }}
                >
                    Season {episode.season}, Episode {episode.number}
                </Typography>
                {episode.airdate && (
                    <Typography
                        variant="body2"
                        color="#bbbbbb"
                        sx={{ marginBottom: 1 }}
                    >
                        Airdate: {episode.airdate}
                    </Typography>
                )}
                {episode.runtime && (
                    <Typography
                        variant="body2"
                        color="#bbbbbb"
                        sx={{ marginBottom: 1 }}
                    >
                        Runtime: {episode.runtime} minutes
                    </Typography>
                )}
                <Typography
                    variant="body2"
                    sx={{
                        marginBottom: 1,
                        textAlign: "justify",
                        color: "#f5f5f5",
                    }}
                >
                    {episode.summary
                        ? episode.summary.replace(/<[^>]+>/g, "") // Remove HTML tags
                        : "No summary available."}
                </Typography>
            </Paper>
        </Grid2>
    ))}
</Grid2>


  );
};

export default EpisodesList;
