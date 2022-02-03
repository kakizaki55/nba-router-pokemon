export const fetchPokedex = async (region) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`);
  const { pokemon_entries } = await response.json();
  return pokemon_entries;
};
export const fetchRegionList = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokedex?offset=0&limit=28'
  );
  const data = await response.json();
  return data;
};

export const fetchPokemonByName = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
};

export const fetchItems = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/item/');
  const data = await response.json();
  return data;
};

export const fetchItemByName = async (selected) => {
  const response = await fetch(` https://pokeapi.co/api/v2/item/${selected}`);
  const data = await response.json();
  return data;
};
