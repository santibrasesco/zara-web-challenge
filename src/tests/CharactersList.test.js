import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import { CharactersDataContext } from "../contexts/CharactersDataContext";
import { CharactersFilterContext } from "../contexts/CharactersFilterContext";
import { CharactersList } from "../components/characters/CharactersList";

const renderComponent = (filterData, charactersData) => {
    return render(
        <BrowserRouter>
            <CharactersFilterContext.Provider value={filterData}>
                <CharactersDataContext.Provider value={charactersData}>
                    <CharactersList
                        loadingStatus={charactersData.loadingStatus}
                        charactersList={charactersData.charactersList}></CharactersList>
                </CharactersDataContext.Provider>
            </CharactersFilterContext.Provider>
        </BrowserRouter>
    )
}

let charactersFilterInitialData = {
    searchText: '',
    showFavorites: false,
    setSearchText: () => { },
    setShowFavorites: () => { }
};

let charactersInitialData = {
    charactersList: [],
    charactersFavorites: [],
    totalCharacters: null,
    loadingStatus: 'success',
    character: null,
    getCharacters: () => { },
    getCharacter: id => { },
    getCharacterComics: characterId => { },
    getCharacterAndComics: characterId => { },
    toggleFavorite: character => { },
    setCharactersList: () => { }
};

let charactersList = [{
    id: 1,
    name: 'Test 1',
    favorite: true,
    thumbnail: {
        path: 'path1',
        extension: 'ext'
    }
}, {
    id: 2,
    name: 'Test 2',
    favorite: true,
    thumbnail: {
        path: 'path2',
        extension: 'ext'
    }
}, {
    id: 3,
    name: 'Test 3',
    favorite: false,
    thumbnail: {
        path: 'path3',
        extension: 'ext'
    }
}];


test('Renderiza la lista de personajes', () => {
    let charactersDataMock = { ...charactersInitialData, charactersList };

    renderComponent(charactersFilterInitialData, charactersDataMock);

    // screen.logTestingPlaygroundURL();

    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
    expect(screen.getByText('Test 3')).toBeInTheDocument();
});

test('Renderiza solo los personajes favoritos', () => {
    let filterDataMock = { ...charactersFilterInitialData, showFavorites: true };

    let charactersDataMock = {
        ...charactersInitialData,
        charactersList,
        charactersFavorites: [charactersList[0], charactersList[1]]
    };

    renderComponent(filterDataMock, charactersDataMock);

    expect(screen.getByText('Test 1')).toBeInTheDocument();
    expect(screen.queryByText('Test 2')).toBeInTheDocument();
    expect(screen.queryByText('Test 3')).not.toBeInTheDocument();

});

test('Renderiza personajes favoritos filtrando por texto de busqueda', () => {
    let filterDataMock = { ...charactersFilterInitialData, searchText: 'test', showFavorites: true };

    charactersList[1].name = 'Favorito no matchea';
    let charactersDataMock = {
        ...charactersInitialData,
        charactersList,
        charactersFavorites: [...[charactersList[0]], ...[charactersList[1]]]
    };

    renderComponent(filterDataMock, charactersDataMock);

    expect(screen.queryByText('Test 1')).toBeInTheDocument();
    expect(screen.queryByText('Favorito no matchea')).not.toBeInTheDocument();
    expect(screen.queryByText('Test 3')).not.toBeInTheDocument();
    expect(screen.getByText(/1 results/i));
});

test('Muestra la cantidad de resultados renderizados', () => {
    let charactersDataMock = {
        ...charactersInitialData,
        charactersList
    };

    renderComponent(charactersFilterInitialData, charactersDataMock);
    expect(screen.getByText(/3 results/i));
});

test('Al hacer click en un personaje navega al detalle', () => {
    let charactersDataMock = { ...charactersInitialData, charactersList };

    renderComponent(charactersFilterInitialData, charactersDataMock);

    const characterCard = screen.getByRole('link', { name: 'Test 1' });
    fireEvent.click(characterCard);

    expect(window.location.pathname).toBe('/1');
});
