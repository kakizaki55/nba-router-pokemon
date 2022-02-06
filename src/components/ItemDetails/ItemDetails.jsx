import React from 'react';
import style from './ItemDetail.css';

export default function ItemDetails({ name, sprites, effect_entries }) {
  const effect = effect_entries?.[0]?.short_effect;
  return (
    <div>
      <h3>{name}</h3>
      <img className={style.images} src={`${sprites?.default}`}></img>
      <p>{effect}</p>
    </div>
  );
}
