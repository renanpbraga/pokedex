import React, { useContext } from 'react';
import PokeContext from '../context/PokeContext';

function Pokedex() {
  const {data, pkmnID, setPkmnID} = useContext(PokeContext);
  
  let pkmnNumber = pkmnID;
  
  const searchByID = ({ target: { value } }) => {
    if (value === '') {
      value = Number(1)
    }
    setPkmnID(Number(value));
    pkmnNumber = Number(value);
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
      </section>
    </main>
  )
}

export default Pokedex;
