import App from './App.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router';

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
  expect(type).toBeInTheDocument();
  expect(lbs).toBeInTheDocument();
  expect(images).toHaveLength(76);
});

test.only('making sure the item menu', async () => {
  render(
    <MemoryRouter initialEntries={['/items']}>
      <Route path="/items">
        <App></App>
      </Route>
    </MemoryRouter>
  );
  const pokemonthumb = await screen.findByText(/bulbasaur/i);
  const itemButton = screen.getByText(/items/i);
  userEvent.click(itemButton);
  const masterball = await screen.findByText(/master/i);
  const diveball = await screen.findByText(/dive/i);
  expect(masterball).toBeInTheDocument();
  expect(diveball).toBeInTheDocument();
});
