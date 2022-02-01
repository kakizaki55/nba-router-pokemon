export const fetchPokedex = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokedex/kanto`);
  const { pokemon_entries } = await response.json();

  const check = await fetch('https://pokeapi.co/api/v2/pokedex');
  console.log(await check.json());

  return pokemon_entries;
};
