import { useState, useEffect } from 'react';
import React from 'react';
import {
  fetchPokedex,
  fetchRegionList,
} from '../../services/fetchdata/fetchdata';
import PokmeonThumb from '../../components/PokemonThumb/PokemonThumb';
import Controls from '../../components/Controls/Controls';
import { Link } from 'react-router-dom';

export default function Home() {
  const [pokidex, setPokedex] = useState([]);
  const [regionList, setRegionList] = useState('');
  const [region, setRegion] = useState('kanto');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchPokedex(region);
      setPokedex(data);
      const { results } = await fetchRegionList();
      setRegionList(results);
      setLoading(false);
    };
    fectData();
  }, [region]);
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <Controls
          regionList={regionList}
          handleChange={handleChange}
        ></Controls>
        {pokidex.map((pokemon) => (
          <>
            <Link to={`${region}/${pokemon.pokemon_species.name}`}>
              <PokmeonThumb pokemon={pokemon} key={pokemon.entry_number} />
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
