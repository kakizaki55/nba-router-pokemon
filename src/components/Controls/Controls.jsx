import React from 'react';

export default function Controls({ regionList }) {
  return (
    <div>
      <select>
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
