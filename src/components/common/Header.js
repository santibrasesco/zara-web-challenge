import React, { useContext } from "react";
import styles from "./Header.module.css";
import { CharactersDataContext } from "../../contexts/CharactersDataContext";
import { CharactersFilterContext } from "../../contexts/CharactersFilterContext";
import { Link } from "react-router-dom";

export const Header = () => {
    const { charactersFavorites } = useContext(CharactersDataContext);
    const { setShowFavorites, setSearchText } = useContext(CharactersFilterContext);

    const filterByFavorites = value => {
        setSearchText('');
        setShowFavorites(value);
    }

    return (
        <div className={styles.headerContainer}>
            <Link to="/">
                <div className={styles.logo}
                    onClick={() => filterByFavorites(false)}>
                </div>
            </Link>

            <Link to="/">
                <div className={styles.contentFav} onClick={() => filterByFavorites(true)}>
                    <div className="fav"></div>
                    <span data-testid="count-fav">{charactersFavorites.length}</span>
                </div>
            </Link>
        </div>
    )
}