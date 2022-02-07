import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import style from './Item.css';

export default function Item({ name, setSelectedItem }) {
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
