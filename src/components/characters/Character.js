import React, { useContext, useEffect } from "react";
import { CharactersDataContext } from "../../contexts/CharactersDataContext";
import { useParams } from "react-router-dom";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterComicList } from "./CharacterComicList";
import { Spinner } from "../common/Spinner";

export const Character = () => {
    const { character, getCharacterAndComics } = useContext(CharactersDataContext);
    const { characterId } = useParams();

    useEffect(() => {
        getCharacterAndComics(characterId);
    }, [characterId]);

    if (!character || character.id != characterId) {
        return <Spinner />
    }

    return (
        <>
            <CharacterDetails
                character={character} />
            <CharacterComicList
                comics={character.comics} />
        </>
    )
}