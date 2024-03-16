import React from "react";
import { CharacterCard } from "./CharacterCard";
import styles from "./CharactersList.module.css";
import { useCharactersFilter } from "../../hooks/useCharactersFilter";
import { Link } from "react-router-dom";

export const CharactersList = ({ charactersList, loadingStatus }) => {
    const filteredList = useCharactersFilter(charactersList);

    return (
        <>
            {loadingStatus === 'success' && <span>{filteredList.length} RESULTS</span>}
            <div className={styles.container}>
                {filteredList.map(character => {
                    return (
                        <Link key={character.id} to={`/${character.id}`} className={styles.item}>
                            <CharacterCard
                                characterRec={character}
                                showDetails={false}
                                selected={false}
                            />
                        </Link>
                    )
                })}
            </div>

        </>
    )
};