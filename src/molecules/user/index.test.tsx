import { render } from '@testing-library/react';
import User from './index';

describe('user component', () => {
  it('should render the component', () => {
    // prettier-ignore
    render(<User avatarLetter="J" roleDescription="Software Engineer" userName="John" />);
  });
});
