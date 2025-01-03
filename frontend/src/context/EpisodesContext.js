import React, { createContext, useState, useContext, useCallback } from "react";
import axiosInstance from "../utils/AxiosInstance";

const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
    const [episodesByShow, setEpisodesByShow] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEpisodes = useCallback(
        async (showId) => {
            if (episodesByShow[showId]) return; 
            setLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get(`episodes/${showId}/`);
                setEpisodesByShow((prev) => ({
                    ...prev,
                    [showId]: response.data, 
                }));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        },
        [episodesByShow]
    );

    return (
        <EpisodesContext.Provider
            value={{
                episodesByShow,
                loading,
                error,
                fetchEpisodes,
            }}
        >
            {children}
        </EpisodesContext.Provider>
    );
};

export const useEpisodes = () => useContext(EpisodesContext);
