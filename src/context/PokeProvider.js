import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PokeContext from './PokeContext';

function PokeProvider({ children }) {
  const [data, setData] = useState();
  const [pkmnID, setPkmnID] = useState(1);
  const [pkmnName, setPkmnName] = useState('bulbasaur');

  const  getPokemon = () => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pkmnID}`;
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setData(results)));
  }
  
  const fetchPkmnByName = () => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pkmnName}`;
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setPkmnName(results)));
  };
  
  useEffect(() => {
    getPokemon();
  }, [pkmnID]);

  useEffect(() => {
    fetchPkmnByName();
  }, [pkmnName])

  const context =  {
    data,
    setData,
    pkmnID,
    setPkmnID,
    pkmnName,
    setPkmnName,
  }

  return (
    <PokeContext.Provider value={ context }>
      { children }
    </PokeContext.Provider>
  )
}

PokeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokeProvider;
