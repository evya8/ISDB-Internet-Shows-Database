import React, { createContext, useState, useContext, useMemo } from "react";
import axiosInstance from "../utils/AxiosInstance";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [filters, setFilters] = useState({ genre: [], ratingRange: [0, 10], language: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchTVShows = async (query) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(`search/`, {
                params: { query },
            });
            setSearchResults(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateFilter = (key, value) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [key]: Array.isArray(value) ? value : [value], 
        }));
      };

    const filteredResults = useMemo(() => {
        const results = searchResults.filter((item) => {
            const matchesGenre =
                filters.genre.length > 0
                    ? item.genres?.some((genre) => filters.genre.includes(genre)) || !item.genres || item.genres.length === 0
                    : true;
            const matchesRating = filters.ratingRange
                    ? item.rating?.average === undefined || 
                      (item.rating.average >= filters.ratingRange[0] &&
                       item.rating.average <= filters.ratingRange[1])
                    : true;
            const matchesLanguage =
                filters.language ? item.language === filters.language || !item.language : true;
    
            return matchesGenre && matchesRating && matchesLanguage;
        });
        return results;
    }, [searchResults, filters]);
    

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                filteredResults,
                filters,
                loading,
                error,
                searchTVShows,
                updateFilter,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};
