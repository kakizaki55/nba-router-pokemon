import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import style from './Item.css';

export default function Item({ item, setSelectedItem }) {
  //need to create a selected state for each item
  // and do a fetch call with the url provided below and render out a details component that has more info about said item
  const { name } = item;

  return (
    <div
      className={style.itemThumb}
      value={name}
      onClick={(e) => {
        setSelectedItem(e.target.innerHTML);
      }}
    >
      <h3>{name}</h3>
    </div>
  );
}
