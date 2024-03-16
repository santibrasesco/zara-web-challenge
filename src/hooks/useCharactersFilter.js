import { useContext } from "react"
import { CharactersFilterContext } from "../contexts/CharactersFilterContext"
import { CharactersDataContext } from "../contexts/CharactersDataContext";

export const useCharactersFilter = charactersList => {
    const { showFavorites, searchText } = useContext(CharactersFilterContext);
    const { charactersFavorites } = useContext(CharactersDataContext);
    let characters = [...charactersList];

    if (showFavorites) {
        characters = charactersFavorites.filter(f => !searchText || f.name.toLowerCase().startsWith(searchText.toLowerCase()));
    }

    return characters;
}
