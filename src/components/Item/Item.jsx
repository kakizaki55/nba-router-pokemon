import React, { useState } from 'react';

export default function Item({ item }) {
  //need to create a selected state for each item
  // and do a fetch call with the url provided below and render out a details component that has more info about said item
  const { name, url } = item;
  console.log(item);

  return (
    <div>
      <img src={``} />
      <h3>{name}</h3>
    </div>
  );
}
