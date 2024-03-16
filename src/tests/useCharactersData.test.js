import { renderHook, act } from '@testing-library/react'
import { useCharactersData } from '../hooks/useCharactersData'

describe("toggleFavorite", () => {

    test("Agrega el personaje a favoritos", () => {
        const { result } = renderHook(() => useCharactersData());
        const character = {
            id: 1,
            favorite: false
        };

        act(() => {
            result.current.setCharacter(character);
        });
        act(() => {
            result.current.setCharactersList([character]);
        });
        act(() => {
            result.current.toggleFavorite(character);
        });

        expect(result.current.charactersFavorites[0].favorite).toBe(true);
        expect(result.current.charactersList[0].favorite).toBe(true);
        expect(result.current.character.favorite).toBe(true);
    });

    test("Remueve el personaje de favoritos", () => {
        const { result } = renderHook(() => useCharactersData());
        const character = {
            id: 1,
            favorite: true
        };

        act(() => {
            result.current.setCharacter(character);
        });
        act(() => {
            result.current.setCharactersList([character]);
        });
        act(() => {
            result.current.setCharactersFavorites([character]);
        });
        act(() => {
            result.current.toggleFavorite(character);
        });

        expect(result.current.charactersFavorites.length).toBe(0);
        expect(result.current.charactersList[0].favorite).toBe(false);
        expect(result.current.character.favorite).toBe(false);
    });
});