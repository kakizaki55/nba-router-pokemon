import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchPokemonByName } from '../../services/fetchdata/fetchdata';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

export default function PokemonDetails() {
  const { region, name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const results = await fetchPokemonByName(name);
      setPokemon(results);
    };
    fetchdata();
  }, [name]);
  return (
    <>
      <PokemonCard pokemon={pokemon}></PokemonCard>
    </>
  );
}
