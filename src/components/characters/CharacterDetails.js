import { ToggleFavoriteCharacter } from "./ToggleFavoriteCharacter";
import styles from "./CharacterDetails.module.css";

export const CharacterDetails = ({ character }) => {
    const { path, extension } = character.thumbnail;
    const urlImage = `${path}.${extension}`;

    return (
        <div className={styles.container}>
            <img src={urlImage} className={styles.image} alt=""></img>
            <div className={styles.details}>
                <div className={styles.header}>
                    <h1>{character.name}</h1>
                    <ToggleFavoriteCharacter
                        size="large"
                        character={character}
                    />
                </div>
                <p>{character.description}</p>
            </div>
        </div>
    )
}