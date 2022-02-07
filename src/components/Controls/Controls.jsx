import React from 'react';
import style from './Controls.css';
import { Link } from 'react-router-dom';

export default function Controls({ regionList, handleChange }) {
  return (
    <div className={style.contorls}>
      <div className={style.dropdown}>
        <select
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {regionList ? (
            regionList.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))
          ) : (
            <></>
          )}
        </select>
      </div>
      <Link to="/items">
        <div className={style.itemButton}>
          <p>Items</p>
        </div>
      </Link>
    </div>
  );
}
