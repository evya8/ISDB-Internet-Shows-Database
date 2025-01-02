import React, { createContext, useState, useContext ,useCallback} from "react";
import axiosInstance from "../utils/AxiosInstance";

const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEpisodes = useCallback(
        async (showId) => {
            if (episodes.some((episode) => episode.showId === showId)) return; 
            setLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get(`episodes/${showId}/`);
                setEpisodes((prev) => [...prev, ...response.data]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        },
        [episodes]
    );
    

    return (
        <EpisodesContext.Provider value={{ episodes, loading, error, fetchEpisodes }}>
            {children}
        </EpisodesContext.Provider>
    );
};

export const useEpisodes = () => {
    return useContext(EpisodesContext);
};
