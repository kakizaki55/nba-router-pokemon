import { useState, useEffect } from 'react';
import React from 'react';
import {
  fetchPokedex,
  fetchRegionList,
} from '../../services/fetchdata/fetchdata';
import PokmeonThumb from '../../components/PokemonThumb/PokemonThumb';
import Controls from '../../components/Controls/Controls';

export default function Home() {
  const [pokidex, setPokedex] = useState([]);
  const [regionList, setRegionList] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fectData = async () => {
      const data = await fetchPokedex();
      setPokedex(data);
    };
    fectData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetchRegionList();

      setRegionList(results);
    };
    fetchData();
  }, []);

  const handleChange = () => {};

  return (
    <>
      <div>
        <Controls regionList={regionList} setRegion={setRegion}></Controls>
        {pokidex.map((pokemon) => (
          <PokmeonThumb pokemon={pokemon} key={pokemon.entry_number} />
        ))}
      </div>
    </>
  );
}
