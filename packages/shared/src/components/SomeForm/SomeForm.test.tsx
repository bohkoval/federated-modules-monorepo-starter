import { render } from '@testing-library/react';

import SomeForm from './SomeForm';

describe('<SomeForm />', () => {
  test('should render SomeForm', async () => {
    const { getByText } = render(<SomeForm />);
    expect(getByText('Submit Form')).toBeTruthy();
  });
});
