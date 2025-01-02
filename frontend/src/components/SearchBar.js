import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';


const SearchBar = ({ onSearch }) => {
  const { searchShows } = useAppContext();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      searchShows(query); 
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        label="Search TV Shows"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
