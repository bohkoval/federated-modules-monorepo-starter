import { render } from '@testing-library/react';

import InputWithLabel from './InputWithLabel';

describe('<TextInput />', () => {
  test('should render TextInput', async () => {
    const label = 'Test label';
    const { getByLabelText } = render(<InputWithLabel label={label} />);
    expect(getByLabelText(label)).toBeTruthy();
  });
});
