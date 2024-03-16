import { useState } from "react";

const LOADING_STATES = ["loading", "errored", "success"];
const LIMIT_RESULTS = 50;
const API_KEY = '5a985cf1c450b50dc8a1a3598739098e';
const API_URL = 'https://gateway.marvel.com/v1/public/characters';

export const useCharactersData = () => {
    const [charactersList, setCharactersList] = useState([]);
    const [charactersFavorites, setCharactersFavorites] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState('');
    const [character, setCharacter] = useState(null);

    const getCharacters = async searchText => {
        try {
            const baseUrl = `${API_URL}?apikey=${API_KEY}`;
            const url = searchText ? `${baseUrl}&limit=${LIMIT_RESULTS}&nameStartsWith=${searchText}` : `${baseUrl}&limit=${LIMIT_RESULTS}`;
            setCharactersList([]);
            setLoadingStatus(LOADING_STATES[0]);
            const results = await fetch(url);
            const characters = await results.json();
            const resultsWithFavs = addFavoriteToCharacter(charactersFavorites, characters.data.results);
            setCharactersList(resultsWithFavs);
            setLoadingStatus(LOADING_STATES[2]);
        } catch (error) {
            console.log('ERROR: ' + error.message);
            setLoadingStatus(LOADING_STATES[1]);
        }
    }

    const getCharacterAndComics = async characterId => {

        try {
            const urlCharacters = `${API_URL}/${characterId}?apikey=${API_KEY}`;
            const urlCharacterComics = `${API_URL}/${characterId}/comics?apikey=${API_KEY}&orderBy=onsaleDate&limit=20`;

            const [resultsCharacter, resultsComics] = await Promise.all([
                fetch(urlCharacters),
                fetch(urlCharacterComics)
            ]);
            const character = (await resultsCharacter.json()).data.results;
            const comics = (await resultsComics.json()).data.results;
            const resultsWithFavs = addFavoriteToCharacter(charactersFavorites, character);
            setCharacter({ ...resultsWithFavs[0], comics });
        } catch (error) {
            console.log('ERROR: ' + error.message);
        }

    }

    const toggleFavorite = updatedCharacter => {
        const isFavorite = updatedCharacter.favorite;
        const updatedFavorites = isFavorite
            ? charactersFavorites.filter(fav => fav.id !== updatedCharacter.id)
            : [...charactersFavorites, { ...updatedCharacter, favorite: true }];

        setCharactersFavorites(updatedFavorites);

        const updatedCharactersList = addFavoriteToCharacter(updatedFavorites, charactersList);
        setCharactersList(updatedCharactersList);

        if (character && character.id === updatedCharacter.id) {
            setCharacter({ ...character, favorite: !updatedCharacter.favorite });
        }
    };

    const addFavoriteToCharacter = (favorites, characterList) => {
        return characterList.map(character => ({
            ...character,
            favorite: favorites.some(fav => fav.id === character.id)
        }));
    };

    return {
        charactersList,
        charactersFavorites,
        loadingStatus,
        character,
        getCharacters,
        getCharacterAndComics,
        toggleFavorite,
        setCharacter,
        setCharactersList,
        setCharactersFavorites
    }
};