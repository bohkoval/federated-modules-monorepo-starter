import { render } from '@testing-library/react';

import MemeImage from './MemeImage';

describe('<MemeImage />', () => {
  test('should render MemeImage', async () => {
    const { getByText } = render(<MemeImage />);
    expect(getByText('Meme image')).toBeTruthy();
  });
});
