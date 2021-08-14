import React from 'react';
import PokeProvider from './context/PokeProvider';
import Pokedex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <PokeProvider>
      <Pokedex />
    </PokeProvider>
  );
}

export default App;
