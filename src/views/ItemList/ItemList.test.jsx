import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ItemList from './ItemList';

test('tesing to usig a memory router to see if the items components actually loads', async () => {
  render(
    <MemoryRouter initialEntries={['/items']}>
      <ItemList />
    </MemoryRouter>
  );
  const masterball = await screen.findByText(/master/i);
  expect(masterball).toBeInTheDocument();
  const burnHeal = screen.getByText(/burn-heal/i);

  userEvent.click(burnHeal);

  const burnhealdescpriction = await screen.findByText(/burn/i);
  expect(burnhealdescpriction).toBeInTheDocument();
});
