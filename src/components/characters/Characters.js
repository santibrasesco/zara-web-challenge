import React, { useContext, useEffect } from "react";
import { CharactersList } from "./CharactersList";
import { CharacterFilterSearch } from "./CharacterFilterSearch";
import { CharactersFilterContext } from "../../contexts/CharactersFilterContext";
import { CharactersDataContext } from "../../contexts/CharactersDataContext";
import { Spinner } from "../common/Spinner";

export const Characters = () => {
    const { charactersList, loadingStatus, getCharacters, setCharactersList } = useContext(CharactersDataContext);
    const { searchText, showFavorites } = useContext(CharactersFilterContext);

    useEffect(() => {
        setCharactersList([]);
        !showFavorites && getCharacters(searchText);
    }, [searchText, showFavorites]);

    return (
        <div className="container">
            <CharacterFilterSearch />
            {loadingStatus === 'loading' && <Spinner />}
            <CharactersList
                loadingStatus={loadingStatus}
                charactersList={charactersList} />
        </div>
    )
};