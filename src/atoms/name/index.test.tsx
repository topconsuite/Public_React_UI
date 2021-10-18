import { render } from '@testing-library/react';
import Name from './index';

describe('name component', () => {
  it('should render the component', () => {
    render(<Name />);
  });
});
