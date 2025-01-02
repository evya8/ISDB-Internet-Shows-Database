import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEpisodes } from "../context/EpisodesContext";
import EpisodesList from "../components/EpisodesList";
import { Container, Typography, CircularProgress } from "@mui/material";

const EpisodesPage = () => {
    const { showId } = useParams();
    const { episodesByShow, loading, error, fetchEpisodes } = useEpisodes();
    const episodes = episodesByShow[showId] || []; 

    useEffect(() => {
        if (showId) {
            fetchEpisodes(showId); 
        }
    }, [showId, fetchEpisodes]);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Typography
                                variant="h2"
                                sx={{
                                    marginBottom: 1,
                                    fontWeight: "bold",
                                    color: "#1976D20", 
                                    textAlign: "center"
                                }}
                            >
                                Episodes List
                            </Typography>
            {loading && (
                <Typography align="center">
                    <CircularProgress size={24} sx={{ marginRight: 1 }} />
                    Loading Episodes...
                </Typography>
            )}
            {error && <Typography color="error">Error: {error}</Typography>}
            {!loading && !error && <EpisodesList episodes={episodes} />}
        </Container>
    );
};

export default EpisodesPage;
