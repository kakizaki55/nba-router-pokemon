import { useState, useEffect } from 'react';
import React from 'react';
import {
  fetchPokedex,
  fetchRegionList,
} from '../../services/fetchdata/fetchdata';
import PokmeonThumb from '../../components/PokemonThumb/PokemonThumb';
import Controls from '../../components/Controls/Controls';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom';
import style from './Home.css';

import PokemonDetails from '../PokemonDeatils/PokemonDetails';
import ItemList from '../ItemList/ItemList';
import { Switch } from 'react-router-dom';

export default function Home() {
  const [pokidex, setPokedex] = useState([]);
  const [regionList, setRegionList] = useState('');
  const [region, setRegion] = useState('kanto');
  const [loading, setLoading] = useState(true);

  const histroy = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokedex(region);
      setPokedex(data);
      const { results } = await fetchRegionList();
      setRegionList(results);
      setLoading(false);
    };
    fetchData();
  }, [region]);
  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const handleClick = () => {
    histroy.push('/');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className={style.pokedex}>
        <Controls
          regionList={regionList}
          handleChange={handleChange}
        ></Controls>
        <div className={style.pokemonThumbList}>
          {pokidex.map((pokemon) => (
            <div key={pokemon.entry_number}>
              <Link
                onClick={handleClick}
                to={`${region}/${pokemon.pokemon_species.name}`}
              >
                <PokmeonThumb pokemon={pokemon} key={pokemon.entry_number} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <div className={style.home_Page}>Welcome to the Online Pokedex</div>
        </Route>
        <Route path="/items">
          <ItemList />
        </Route>
        <Route path="/:region/:name">
          <PokemonDetails />
        </Route>
      </Switch>
    </>
  );
}
