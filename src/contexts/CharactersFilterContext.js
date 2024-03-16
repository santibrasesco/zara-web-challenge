import React, { createContext, useState } from "react";

export const CharactersFilterContext = createContext({
    searchText: '',
    showFavorites: false,
    setSearchText: () => { },
    setShowFavorites: () => { }
});

export const CharactersFilterProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);

    const value = {
        searchText,
        setSearchText,
        showFavorites,
        setShowFavorites
    };

    return (
        <CharactersFilterContext.Provider value={value}>
            {children}
        </CharactersFilterContext.Provider>
    )
}