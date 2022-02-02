import React from 'react';

export default function Controls({ regionList, handleChange }) {
  return (
    <div>
      <select>
        {regionList ? (
          regionList.map(({ name }) => (
            <option key={name} value={name} onChange={handleChange}>
              {name}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
    </div>
  );
}
