import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { fetchPokemonByName } from '../../services/fetchdata/fetchdata';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

export default function PokemonDetails() {
  const { region, name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const { url, params } = useRouteMatch();

  console.log(url);
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
