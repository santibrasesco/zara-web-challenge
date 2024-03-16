import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from './components/common/Header';
import { Characters } from './components/characters/Characters';
import { CharactersDataProvider } from './contexts/CharactersDataContext';
import { CharactersFilterProvider } from './contexts/CharactersFilterContext';
import { Character } from './components/characters/Character';

function App() {
  return (
    <div className='app'>
      <CharactersFilterProvider>
        <CharactersDataProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Characters />} />
              <Route path="/:characterId" element={<Character />} />
            </Routes>
          </BrowserRouter>
        </CharactersDataProvider>
      </CharactersFilterProvider>
    </div>
  );
}

export default App;
