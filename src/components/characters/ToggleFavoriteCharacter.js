import { useContext } from "react";
import { CharactersDataContext } from "../../contexts/CharactersDataContext";
import styles from "./ToggleFavoriteCharacter.module.css";

export const ToggleFavoriteCharacter = ({ character, isHovered, size }) => {
    const { toggleFavorite } = useContext(CharactersDataContext);

    return (
        <div className={`${styles.image} ${styles[size || '']}`}>
            <div data-testid="fav-icon" className={`${character.favorite ? styles.fav : styles.noFav} ${isHovered ? styles.isHovered : ''}`}
                onClick={evt => { toggleFavorite(character); evt.preventDefault(); evt.stopPropagation() }}>
            </div>
        </div>
    )
}