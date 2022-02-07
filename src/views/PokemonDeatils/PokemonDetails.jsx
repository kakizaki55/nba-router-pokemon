import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { fetchPokemonByName } from '../../services/fetchdata/fetchdata';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const results = await fetchPokemonByName(name);
        setPokemon(results);
        setLoading(false);
      } catch {
        setPokemon('');
      }
    };
    fetchdata();
  }, [name]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <PokemonCard pokemon={pokemon}></PokemonCard>{' '}
    </>
  );
}
