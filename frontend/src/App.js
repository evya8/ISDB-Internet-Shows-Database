import React from 'react';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import { ThemeProviderComponent } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import SearchAndFilterPage from './pages/SearchAndFilterPage';
import { Box, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <ThemeProviderComponent>
      <AppProvider>
        <CssBaseline />
        <NavBar />
        <Box sx={{ display: 'flex', pt: 8 }}>
          <LeftBar />
          <Box sx={{ flex: 1, ml: 30, mr: 30, mt: 2 }}>
            <SearchAndFilterPage />
          </Box>
          <RightBar />
        </Box>
      </AppProvider>
    </ThemeProviderComponent>
  );
};

export default App;
