import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import App from './App.jsx';

test('making sure the header renders and a list of pokemon who up ion loading', async () => {
  render(<App></App>);
  const header = await screen.findByText(/pokemon pokedex/i);
  await waitForElementToBeRemoved(screen.getByText(/loading/i));
  const pokemoncard = screen.getByText(/bulbasaur/i);

  expect(header).toBeInTheDocument();
  expect(pokemoncard).toBeInTheDocument();
});
