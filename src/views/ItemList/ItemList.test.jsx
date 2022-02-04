import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ItemList from './ItemList';

test('tesing to usig a memory router to see if the items components actually loads', async () => {
  render(
    <MemoryRouter initialEntries={['/items']}>
      <ItemList />
    </MemoryRouter>
  );
  const masterball = await screen.findByText(/master/i, {}, { timeout: 2000 });
  expect(masterball).toBeInTheDocument();
});
