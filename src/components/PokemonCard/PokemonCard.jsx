import React from 'react';
import { useHistory } from 'react-router';

export default function PokemonCard({ pokemon }) {
  const history = useHistory();

  const { name, weight, types, id } = pokemon;

  return (
    <div>
      {types?.map(({ type: { name } }) => (
        <h1 key={`${name}`}>{name}</h1>
      ))}
      <h1>{name}</h1>
      <h1>{weight} lbs</h1>
      <h5
        onClick={() => {
          history.push('/');
        }}
      >
        back to home page
      </h5>
    </div>
  );
}
