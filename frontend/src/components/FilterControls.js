import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, MenuItem, Typography, Checkbox, ListItemText } from '@mui/material';

const FilterControls = ({ filters = {}, updateFilter = () => {}, fetchFilteredData = () => {} }) => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    genre: [],
    language: '',
    ratingRange: [0, 10],
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const allGenres = new Set();
        const allLanguages = new Set();
        let page = 0;
        let hasMoreData = true;

        while (hasMoreData) {
          const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
          if (!response.ok) {
            if (response.status === 404) {
              hasMoreData = false;
              continue;
            } else {
              throw new Error('Failed to fetch data from TVmaze API');
            }
          }

          const shows = await response.json();
          if (shows.length === 0) {
            hasMoreData = false;
          } else {
            shows.forEach((show) => {
              show.genres.forEach((genre) => allGenres.add(genre));
              if (show.language) {
                allLanguages.add(show.language);
              }
            });
            page += 1;
          }
        }

        setGenres([...allGenres]);
        setLanguages([...allLanguages]);
      } catch (error) {
        console.error('Error fetching genres and languages:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filterName]: value }));
    updateFilter(filterName, value);

    // Fetch filtered data (if required)
    fetchFilteredData({ ...selectedFilters, [filterName]: value });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography>
        Results Filters
      </Typography>
      {/* Genre Filter */}
      <Select
        multiple
        value={selectedFilters.genre}
        onChange={(e) => handleFilterChange('genre', e.target.value)}
        displayEmpty
        renderValue={(selected) => (selected.length === 0 ? 'All Genres' : selected.join(', '))}
      >
        <MenuItem disabled value="">
          <em>All Genres</em>
        </MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            <Checkbox checked={selectedFilters.genre.includes(genre)} />
            <ListItemText primary={genre} />
          </MenuItem>
        ))}
      </Select>

      {/* Language Filter */}
      <Select
        value={selectedFilters.language}
        onChange={(e) => handleFilterChange('language', e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All Languages</MenuItem>
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>

      {/* Rating Filter */}
      <Box>
        <Typography variant="body2" gutterBottom>
          Rating Range
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Min Rating */}
          <input
            type="number"
            value={selectedFilters.ratingRange[0]}
            onChange={(e) => {
              const min = parseFloat(e.target.value) || 0;
              handleFilterChange('ratingRange', [min, selectedFilters.ratingRange[1]]);
            }}
            min={0}
            max={10}
            step={0.1}
            style={{ width: '50px', textAlign: 'center' }}
            placeholder="Min"
          />
          <span>to</span>
          {/* Max Rating */}
          <input
            type="number"
            value={selectedFilters.ratingRange[1]}
            onChange={(e) => {
              const max = parseFloat(e.target.value) || 10;
              handleFilterChange('ratingRange', [selectedFilters.ratingRange[0], max]);
            }}
            min={0}
            max={10}
            step={0.1}
            style={{ width: '50px', textAlign: 'center' }}
            placeholder="Max"
          />
        </Box>
      </Box>
    </Box>
  );
};

FilterControls.propTypes = {
  filters: PropTypes.object,
  updateFilter: PropTypes.func,
  fetchFilteredData: PropTypes.func,
};

FilterControls.defaultProps = {
  filters: {},
  updateFilter: () => {},
  fetchFilteredData: () => {},
};

export default FilterControls;
