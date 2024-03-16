import React, { useState } from "react";
import styles from "./CharacterCard.module.css";
import { ToggleFavoriteCharacter } from "./ToggleFavoriteCharacter";

export const CharacterCard = ({ characterRec, showDetails }) => {
    const { path, extension } = characterRec.thumbnail;
    const urlImage = `${path}.${extension}`;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img src={urlImage} className={styles.image} alt=""></img>

            <div className={styles.details}>
                <div className={`${styles.contentDetails} flex space-between`}>
                    <h4 className={styles.name}>{characterRec.name}</h4>
                    <div className={styles.img}>
                        <ToggleFavoriteCharacter
                            character={characterRec}
                            isHovered={isHovered}
                        />
                    </div>
                </div>

                {showDetails && <p>{characterRec.description}</p>}

            </div>
        </div>
    )
}