import React, { useContext } from "react";
import { CharactersFilterContext } from "../../contexts/CharactersFilterContext";
import { InputSearch } from "../common/InputSearch";

export const CharacterFilterSearch = () => {
    const { searchText, setSearchText } = useContext(CharactersFilterContext);

    return (
        <InputSearch
            value={searchText}
            placeholder="SEARCH A CHARACTER.."
            onChange={value => setSearchText(value)}
        />
    )
}