import React from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { Container, Grid2, Typography, Paper, CircularProgress, Button } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FilterControls from "../components/FilterControls"

const SearchAndFilterPage = () => {
  const { searchResults, loading, error } = useSearch();
  const navigate = useNavigate();

  const handleViewEpisodes = (showId) => {
      navigate(`/episodes/${showId}`);
  };

    return (
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            {/* Search Bar */}
            <SearchBar />
            <FilterControls />

            {/* Status Messages */}
            {loading && (
                <Typography
                    variant="h6"
                    color="text.secondary"
                    align="center"
                    sx={{ marginTop: 2 }}
                >
                    <CircularProgress size={24} sx={{ marginRight: 1 }} />
                    Searching...
                </Typography>
            )}
            {error && (
                <Typography variant="h6" color="error" align="center" sx={{ marginTop: 2 }}>
                    Error: {error}
                </Typography>
            )}

            {/* Search Results */}
            <Grid2 container spacing={3} sx={{ marginTop: 4 }}>
                {searchResults.length === 0 && !loading && !error && (
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        align="center"
                        sx={{ width: "100%" }}
                    >
                        No results found. Try searching for something else.
                    </Typography>
                )}
                {searchResults.map((show, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 1,
                                backgroundColor: "#1e1e1e",
                                color: "#ffffff",
                            }}
                        >
                            <Typography variant="h6">{show.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {show.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleViewEpisodes(show.id)}
                            >
                                View Episodes
                            </Button>
                        </Paper>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default SearchAndFilterPage;
