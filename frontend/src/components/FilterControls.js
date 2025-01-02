import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, MenuItem, Typography ,Checkbox, ListItemText} from '@mui/material';

const FilterControls = ({ filters = {}, updateFilter = () => {} }) => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

  const defaultFilters = {
    genre: '',
    ratingRange: [0, 10],
    language: '',
    ...filters,
  };

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const shows = await response.json();

        const allGenres = new Set();
        const allLanguages = new Set();
        shows.forEach(show => {
          show.genres.forEach(genre => allGenres.add(genre));
          allLanguages.add(show.language);
        });

        setGenres([...allGenres]);
        setLanguages([...allLanguages]);
      } catch (error) {
        console.error('Error fetching genres and languages:', error);
      }
    };

    fetchOptions();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Genre Filter */}
      <Select
        multiple
        value={Array.isArray(defaultFilters.genre) ? defaultFilters.genre : []} // Ensure value is an array
        onChange={(e) => updateFilter('genre', e.target.value)}
        displayEmpty
        renderValue={(selected) =>
          selected.length === 0 ? 'All Genres' : selected.join(', ')
        }
      >
        <MenuItem disabled value="">
          <em>All Genres</em>
        </MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>
            <Checkbox checked={defaultFilters.genre?.includes(genre)} />
            <ListItemText primary={genre} />
          </MenuItem>
        ))}
      </Select>

      {/* Language Filter */}
      <Select
        value={defaultFilters.language}
        onChange={(e) => updateFilter('language', e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All Languages</MenuItem>
        {languages.map((language) => (
          <MenuItem key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>


      {/* Rating Filter (Range) */}
      <Box>
      <Typography variant="body2" gutterBottom>
        Rating Range
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Min Rating */}
        <input
          type="number"
          value={defaultFilters.ratingRange[0]}
          onChange={(e) => {
            const min = parseFloat(e.target.value) || 0;
            updateFilter('ratingRange', [min, defaultFilters.ratingRange[1]]);
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
          value={defaultFilters.ratingRange[1]}
          onChange={(e) => {
            const max = parseFloat(e.target.value) || 10;
            updateFilter('ratingRange', [defaultFilters.ratingRange[0], max]);
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

// PropTypes for validation
FilterControls.propTypes = {
  filters: PropTypes.shape({
    genre: PropTypes.string,
    ratingRange: PropTypes.arrayOf(PropTypes.number),
    language: PropTypes.string,
  }),
  updateFilter: PropTypes.func,
};

// Default props as a backup
FilterControls.defaultProps = {
  filters: {
    genre: '',
    ratingRange: [0, 10],
    language: '',
  },
  updateFilter: () => {},
};

export default FilterControls;
