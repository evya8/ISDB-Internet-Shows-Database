import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // State for favorite shows
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // State for shows and filters
  const [shows, setShows] = useState([]);
  const [filters, setFilters] = useState({
    genre: '',
    rating: 0,
    language: '',
  });

  // State for loading and errors
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Add a show to favorites
  const addFavorite = (show) => {
    const updatedFavorites = [...favorites, show];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Remove a show from favorites
  const removeFavorite = (showId) => {
    const updatedFavorites = favorites.filter((show) => show.id !== showId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Check if a show is in favorites
  const isFavorite = (showId) => favorites.some((show) => show.id === showId);

  // Fetch shows based on a search query
  const searchShows = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with your API call
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      setShows(data);
    } catch (err) {
      setError('Failed to fetch shows.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Update filters
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        shows,
        filters,
        isLoading,
        error,
        searchShows,
        updateFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);
