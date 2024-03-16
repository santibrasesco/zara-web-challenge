import { render, screen } from '@testing-library/react'
import { Header } from '../components/common/Header';
import { BrowserRouter } from 'react-router-dom';
import { CharactersDataContext } from '../contexts/CharactersDataContext';

const customRender = () => {
    const charactersFavorites = [{
        id: 1,
        favorite: true
    }, {
        id: 2,
        favorite: true
    }];

    render(
        <BrowserRouter>
            <CharactersDataContext.Provider value={{ charactersFavorites }}>
                <Header />
            </CharactersDataContext.Provider>
        </BrowserRouter>)
}

test("Muestra la cantidad de personajes favoritos", () => {
    customRender();
    expect(screen.getByTestId('count-fav')).toHaveTextContent(2);
});

test("Valida que los links naveguen a la pagina de busqueda", () => {
    customRender();

    const logoLink = screen.getByRole('link', { name: '' });
    const contentFavLink = screen.getByRole('link', { name: '' });

    expect(logoLink).toHaveAttribute('href', '/');
    expect(contentFavLink).toHaveAttribute('href', '/');
});