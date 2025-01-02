// EpisodesPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; // Get showId from URL params
import { useEpisodes } from "../context/EpisodesContext";
import EpisodesList from "../components/EpisodesList";
import { Container, Typography, CircularProgress } from "@mui/material";

const EpisodesPage = () => {
    const { showId } = useParams(); // Get the showId from the URL
    const { episodes, loading, error, fetchEpisodes } = useEpisodes();

    useEffect(() => {
        if (showId) {
            fetchEpisodes(showId);
        }
    }, [showId, fetchEpisodes]);

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
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
