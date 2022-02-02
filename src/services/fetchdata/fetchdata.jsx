export const fetchPokedex = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokedex/kanto`);
  const { pokemon_entries } = await response.json();

  return pokemon_entries;
};
export const fetchRegionList = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokedex?offset=0&limit=28'
  );
  const data = await response.json();
  console.log(data);
  return data;
};
