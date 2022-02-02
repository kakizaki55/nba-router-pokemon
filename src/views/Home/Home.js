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
  const [region, setRegion] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchPokedex();
      setPokedex(data);
      const { results } = await fetchRegionList();
      setRegionList(results);
      setLoading(false);
    };
    fectData();
  }, []);
  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <>
      <div>
        <Controls
          regionList={regionList}
          handleChange={handleChange}
        ></Controls>
        {pokidex.map((pokemon) => (
          <>
            <Link to={`kanto/${pokemon.pokemon_species.name}`}>
              <PokmeonThumb pokemon={pokemon} key={pokemon.entry_number} />
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
