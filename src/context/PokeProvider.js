import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PokeContext from './PokeContext';

function PokeProvider({ children }) {
  const [data, setData] = useState();
  const [pkmnID, setPkmnID] = useState(1);

  const  getPokemon = () => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pkmnID}`;
    fetch(endpoint)
      .then((response) => response.json()
        .then((results) => setData(results)))
  }
  
  useEffect(() => {
    getPokemon();
  }, [pkmnID]);

  const context =  {
    data,
    setData,
    pkmnID,
    setPkmnID,
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
