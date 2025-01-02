import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useThemeContext } from '../context/ThemeContext';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TV Show App
        </Typography>
        <IconButton color="inherit">
          <FavoriteIcon />
        </IconButton>
        <Switch checked={isDarkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
