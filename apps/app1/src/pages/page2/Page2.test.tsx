import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Page2 from './Page2';

describe('<Page2 />', () => {
  test('should render Page2', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Page2 />
      </MemoryRouter>
    );
    expect(getByText('This is page 2 of app1')).toBeTruthy();
  });
});
