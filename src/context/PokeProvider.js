import React from 'react';
import PropTypes from 'prop-types';
import PokeContext from './PokeContext';

function PokeProvider({ children }) {
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
