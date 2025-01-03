import React from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { Container, Grid2, Typography, CircularProgress } from "@mui/material";
import SearchBar from "../components/SearchBar";
import FilterControls from "../components/FilterControls";
import ShowCard from "../components/ShowCard";

const SearchAndFilterPage = () => {
  const { filteredResults, loading, error, updateFilter, filters } = useSearch();
  const navigate = useNavigate();

  const handleViewEpisodes = (showId) => {
    navigate(`/episodes/${showId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>

      <SearchBar />

      <FilterControls filters={filters} updateFilter={updateFilter} />

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

      <Grid2 container spacing={3} sx={{ marginTop: 4 }}>
        {filteredResults.length === 0 && !loading && !error && (
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            sx={{ width: "100%" }}
          >
            No results found. Try searching or adjusting the filters.
          </Typography>
        )}
        {filteredResults.map((show) => (
          <Grid2 item xs={12} sm={6} md={4} key={show.id}>
            <ShowCard show={show} onViewEpisodes={handleViewEpisodes} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default SearchAndFilterPage;
