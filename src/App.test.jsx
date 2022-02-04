import App from './App.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

test('making sure the header renders and a list of pokemon who up ion loading', async () => {
  render(
    <MemoryRouter>
      <App></App>
    </MemoryRouter>
  );
  const header = screen.getByText(/pokemon pokedex/i);
  const pokemonthumb = await screen.findByText(/bulbasaur/i);
  expect(header).toBeInTheDocument();
  expect(pokemonthumb).toBeInTheDocument();
});

test('making sure the pokemon details shows up when clicking a thumb nail', async () => {
  render(
    <MemoryRouter>
      <App></App>
    </MemoryRouter>
  );
  const pokemonthumb = await screen.findByText(/bulbasaur/i);
  userEvent.click(pokemonthumb);
  const type = await screen.findByRole('heading', { name: /grass/i });
  const lbs = await screen.findByRole('heading', { name: /69 lbs/i });
  const images = screen.getAllByRole('img');
  screen.debug(images);
  expect(images).toHaveLength(76);
});
