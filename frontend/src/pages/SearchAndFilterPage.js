import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid'; // Corrected Grid import
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import ShowCard from '../components/ShowCard';
import { useAppContext } from '../context/AppContext';

const SearchAndFilterPage = () => {
  const { shows, filters, updateFilter, searchShows } = useAppContext();

  const handleViewEpisodes = async (showId) => {
    try {
      const response = await fetch(`/api/episodes/${showId}`);
      const data = await response.json();
      updateFilter('episodes', data);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const filteredShows = (shows || []).filter((show) => {
    return (
      (!filters.genre || (show.genres && show.genres.includes(filters.genre))) &&
      (!filters.rating || (show.rating?.average >= filters.rating)) &&
      (!filters.language || show.language === filters.language)
    );
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Search and Filter TV Shows
      </Typography>
      {/* Search Bar */}
      <Box sx={{ mb: 3 }}>
        <SearchBar onSearch={searchShows} />
      </Box>
      {/* Filter Controls */}
      <Box sx={{ mb: 3 }}>
        <FilterControls filters={filters} updateFilter={updateFilter} />
      </Box>
      {/* Show Results */}
      <Grid container spacing={2}>
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <Grid item xs={12} sm={6} md={4} key={show.id}>
              <ShowCard show={show} onViewEpisodes={handleViewEpisodes} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 3, width: '100%' }}>
            No shows match your criteria.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default SearchAndFilterPage;
