import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import App from './App.jsx';

test('making sure the header renders and a list of pokemon who up ion loading', async () => {
  render(<App></App>);
  const header = screen.getByText(/pokemon pokedex/i);
  const pokemoncard = await screen.findByText(/bulbasaur/i);
  expect(header).toBeInTheDocument();
  expect(pokemoncard).toBeInTheDocument();
});
