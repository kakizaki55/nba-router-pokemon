import React from 'react';

export default function Controls({ regionList, handleChange }) {
  return (
    <div>
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
  );
}
