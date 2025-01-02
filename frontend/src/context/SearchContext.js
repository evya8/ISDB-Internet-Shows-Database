// SearchContext.js
import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../utils/AxiosInstance";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
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
            console.log(response.data)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchContext.Provider
            value={{ searchResults, loading, error, searchTVShows }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};
