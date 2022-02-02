import React from 'react';
import { useHistory } from 'react-router';
import style from './PokemonCard.css';

export default function PokemonCard({ pokemon }) {
  const history = useHistory();
  const { name, weight, types, id, sprites } = pokemon;
  console.log(sprites?.back_default);

  const arrayOfSprites = [];

  const myFirstRecusion = (sprites) => {
    for (const key in sprites) {
      if (typeof sprites[key] === 'object') {
        myFirstRecusion(sprites[key]);
      } else {
        console.log(sprites[key]);
        arrayOfSprites.push(sprites[key]);
      }
    }
  };
  myFirstRecusion(sprites);
  console.log(arrayOfSprites);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{weight} lbs</h3>
      {arrayOfSprites?.map((sprite_url) => (
        <img src={`${sprite_url}`} className={style.img} />
      ))}
      {types?.map(({ type: { name } }) => (
        <h4 key={`${name}`}>{name}</h4>
      ))}
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
