import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import { ThemeProviderComponent } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { SearchProvider } from "./context/SearchContext";
import { EpisodesProvider } from "./context/EpisodesContext";
import SearchAndFilterPage from './pages/SearchAndFilterPage';
import EpisodesPage from "./pages/EpisodesPage";
import { Box, CssBaseline } from '@mui/material';

const App = () => {
    return (
        <Router>
            <ThemeProviderComponent>
                <AppProvider>
                    <SearchProvider>
                        <EpisodesProvider>
                            <CssBaseline />
                            <NavBar />
                            <Box sx={{ display: 'flex', pt: 8 }}>
                                <LeftBar />
                                <Box sx={{ flex: 1, ml: 30, mr: 30, mt: 2 }}>
                                    <Routes>
                                        <Route path="/" element={<SearchAndFilterPage />} />
                                        <Route path="/episodes/:showId" element={<EpisodesPage />} />
                                    </Routes>
                                </Box>
                                <RightBar />
                            </Box>
                        </EpisodesProvider>
                    </SearchProvider>
                </AppProvider>
            </ThemeProviderComponent>
        </Router>
    );
};

export default App;
