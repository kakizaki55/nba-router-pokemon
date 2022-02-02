import React from 'react';

export default function PokemonCard({ pokemon }) {
  const { name, weight, types, id } = pokemon;

  return (
    <div>
      {types ? (
        types.map((type) => <h1 key={`${type.type.name}`}>{type.type.name}</h1>)
      ) : (
        <></>
      )}

      <h1>{name}</h1>
      <h1>{weight}lbs</h1>
    </div>
  );
}
