import React from 'react';
// import style from './ItemDetails.css';

export default function ItemDetails({ detailItem }) {
  console.log(detailItem);
  const { name, sprites, effect_entries } = detailItem;

  const effect = effect_entries?.[0]?.short_effect;
  return (
    <div>
      <h3>{name}</h3>
      <img src={`${sprites?.default}`}></img>
      <p>{effect}</p>
    </div>
  );
}
