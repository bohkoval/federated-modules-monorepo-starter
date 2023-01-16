import { render } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  test('should render Button', async () => {
    const buttonText = 'Button text';
    const { getByText } = render(<Button>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeTruthy();
  });
});
