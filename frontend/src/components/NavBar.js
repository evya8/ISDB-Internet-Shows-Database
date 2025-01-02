import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TV Show App
        </Typography>
        <IconButton
          component={Link} // Link the icon to Favorites page
          to="/favorites"
          color="inherit"
        >
          <FavoriteIcon />
        </IconButton>
        <Switch checked={isDarkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
