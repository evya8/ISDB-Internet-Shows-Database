import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useSearch } from "../context/SearchContext";

const SearchBar = () => {
    const { searchTVShows } = useSearch();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            searchTVShows(query);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                margin: 2,
            }}
        >
            <TextField
                variant="outlined"
                label="Search TV Shows"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ width: "70%" }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{ height: "56px" }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
