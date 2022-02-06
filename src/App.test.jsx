import App from './App.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('combined all the test into one, navigation through out the app like user might.', async () => {
  render(<App />);
  const header = screen.getByText(/pokemon pokedex/i);
  expect(header).toBeInTheDocument();

  const pokemonthumb = await screen.findByText(/bulbasaur/i);
  expect(pokemonthumb).toBeInTheDocument();

  userEvent.click(pokemonthumb);
  const type = await screen.findByRole(
    'heading',
    { name: /grass/i },
    { timeout: 2000 }
  );
  const lbs = screen.getByRole('heading', { name: /69 lbs/i });
  const images = screen.getAllByRole('img');
  expect(type).toBeInTheDocument();
  expect(lbs).toBeInTheDocument();
  expect(images).toHaveLength(76);

  const itemButton = screen.getByText(/items/i);

  userEvent.click(itemButton);

  const masterball = await screen.findByText(/master/i);
  expect(masterball).toBeInTheDocument();

  const diveball = await screen.findByText(/dive/i);
  expect(diveball).toBeInTheDocument();

  userEvent.click(masterball);

  const masterballDescription = await screen.findByText(
    /catches a wild pokémon every time\./i
  );

  const quickball = screen.getByText(/quick/i);
  expect(quickball).toBeInTheDocument();
  userEvent.click(quickball);

  const quickballDescription = await screen.findByText(
    /tries to catch a wild pokémon\. success rate is 4× \(gen v: 5×\), but only on the first turn\./i
  );
  expect(quickballDescription).toBeInTheDocument();
  act(() => {});
});
