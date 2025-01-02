import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select, MenuItem, Slider } from '@mui/material';

const FilterControls = ({ filters = {}, updateFilter = () => {} }) => {
  
  const defaultFilters = {
    genre: '',
    rating: 5,
    language: '',
    ...filters, 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Genre Filter */}
      <Select
        value={defaultFilters.genre}
        onChange={(e) => updateFilter('genre', e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All Genres</MenuItem>
        <MenuItem value="Drama">Drama</MenuItem>
        <MenuItem value="Comedy">Comedy</MenuItem>
        <MenuItem value="Action">Action</MenuItem>
      </Select>

      {/* Rating Filter */}
      <Slider
        value={defaultFilters.rating}
        onChange={(e, value) => updateFilter('rating', value)}
        min={0}
        max={10}
        step={0.1}
        valueLabelDisplay="auto"
      />

      {/* Language Filter */}
      <Select
        value={defaultFilters.language}
        onChange={(e) => updateFilter('language', e.target.value)}
        displayEmpty
      >
        <MenuItem value="">All Languages</MenuItem>
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Spanish">Spanish</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </Select>
    </Box>
  );
};

// PropTypes for validation
FilterControls.propTypes = {
  filters: PropTypes.shape({
    genre: PropTypes.string,
    rating: PropTypes.number,
    language: PropTypes.string,
  }),
  updateFilter: PropTypes.func,
};

// Default props as a backup
FilterControls.defaultProps = {
  filters: {
    genre: '',
    rating: 5,
    language: '',
  },
  updateFilter: () => {}, 
};

export default FilterControls;
