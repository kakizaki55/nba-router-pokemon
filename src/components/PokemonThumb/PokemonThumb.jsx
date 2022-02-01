import React from 'react';

import style from './PokemonThumb.css';

export default function PokemonThumb({ pokemon }) {
  const {
    entry_number,
    pokemon_species: { name, url },
  } = pokemon;

  return (
    <>
      <div className={style.pokemonCard}>
        <p>{entry_number}</p>
        <span>{name}</span>
      </div>
    </>
  );
}
