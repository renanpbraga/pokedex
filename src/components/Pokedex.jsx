import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';

function Pokedex() {
  const {data, pkmnID, setPkmnID, pkmnName, setPkmnName} = useContext(PokeContext);
  
  let pkmnNumber = pkmnID;

  const searchByID = ({ target: { value } }) => {
    if (value === '') {
      value = Number(1)
    }
    setPkmnID(Number(value));
    pkmnNumber = Number(value);
  }

  const searchByName = ({ target: { value } }) => {
    setPkmnName(value.toLowerCase());
  }

  const getIdFromName = () => {
    setPkmnID(pkmnName.id);    
  }

  return (
    <main>
      <section className="filters-container">
        <label htmlFor="pkmnID">
          {'Id#: '}
        </label>
        <input
          type="number"
          id="pkmnID"
          placeholder="ID"
          onChange={searchByID}
        />
        <label htmlFor="pkmnName">
            {'Nome: '}
          </label>
          <input
            type="text"
            id="pkmnName"
            onChange={searchByName}
          />
          <button
            type="button"
            onClick={getIdFromName}
          >
            {'Procurar'}
          </button>
      </section>
    </main>
  )
}

export default Pokedex;
