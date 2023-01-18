import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'shared/queries/client';

import Page2 from './Page2';

describe('<Page2 />', () => {
  test('should render Page2', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Page2 />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(getByText('This is page 2 of app2')).toBeTruthy();
  });
});
