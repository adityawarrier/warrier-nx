import { render } from '@testing-library/react';

import Dummy from './Dummy';

describe('Dummy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dummy />);
    expect(baseElement).toBeTruthy();
  });
});
