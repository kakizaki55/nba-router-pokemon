import { useState, useEffect } from 'react';
import React from 'react';
import { fetchPokedex } from '../../services/fetchdata/fetchdata';
import PokmeonThumb from '../../components/PokemonThumb/PokemonThumb';

export default function Home() {
  const [pokidex, setPokedex] = useState([]);

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchPokedex();
      setPokedex(data);
    };
    fectData();
  }, []);
  console.log(pokidex);

  return (
    <>
      <div>
        {pokidex.map((pokemon) => (
          <PokmeonThumb pokemon={pokemon} key={pokemon.entry_number} />
        ))}
      </div>
    </>
  );
}
