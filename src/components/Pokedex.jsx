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
      <section>
        <div className="pkmn-type">
          <p>Type:</p>
          <ul>
            {data && data.types.map(
              ({ type }, index) =>
                index <= data.types.length && (
              <li>{type.name[0].toUpperCase() + type.name.substr(1)}</li>)
              )}
          </ul>
        </div>
        <div className="pokemon-container">
        <input
          type="image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data && data.id}.gif`}
          alt={data && data.name}
          data-testid="pokemon_sprite"
          className="pkmn-img"
        />
        <p
          className="pkmn-name"
        >
          { data && `${data.id}. ${data.name[0].toUpperCase() + data.name.substr(1) }`}
        </p>
        </div>
        <div className="pkmn-stats">
          <p>{`Height: ${data && data.height/10}m`}</p>
          <p>{`Weight: ${data && data.weight/10}Kg`}</p>
          <p>Stats:</p>
          {
            <ul>
            {data && data.stats.map(
              ({ stat, base_stat }, index) =>
                index <= data.stats.length &&
                (
                  <li>
                    {`${stat.name[0].toUpperCase() + stat.name.substr(1)}: ${base_stat}`}
                  </li>
                ))}
            </ul>
          }
        </div>
      </section>
    </main>
  )
}

export default Pokedex;
