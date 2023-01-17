import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('should render NavBar', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(getByText(/^Current route:/)).toBeTruthy();
  });
});
