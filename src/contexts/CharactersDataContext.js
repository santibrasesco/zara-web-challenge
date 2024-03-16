import React, { createContext } from "react";
import { useCharactersData } from "../hooks/useCharactersData";

export const CharactersDataContext = createContext({
    charactersList: [],
    charactersFavorites: [],
    totalCharacters: null,
    loadingStatus: '',
    character: null,
    getCharacters: () => { },
    getCharacterAndComics: characterId => { },
    toggleFavorite: character => { },
    setCharacter: character => { },
    setCharactersList: () => { }
});


export const CharactersDataProvider = ({ children }) => {
    const {
        charactersList,
        charactersFavorites,
        getCharacters,
        getCharacterAndComics,
        toggleFavorite,
        setCharactersList,
        setCharacter,
        loadingStatus,
        totalCharacters,
        character,
    } = useCharactersData();

    const value = {
        charactersList,
        charactersFavorites,
        totalCharacters,
        character,
        getCharacters,
        getCharacterAndComics,
        toggleFavorite,
        setCharactersList,
        setCharacter,
        loadingStatus
    };

    return (
        <CharactersDataContext.Provider value={value}>
            {children}
        </CharactersDataContext.Provider>
    );
};