import { render, screen, fireEvent } from '@testing-library/react';
import Favorite from './index';

describe('favorite component', () => {
  it('should render the component', () => {
    render(<Favorite />);
  });

  it('should bookmark', () => {
    render(<Favorite />);
    const component = screen.getByText('☆');
    fireEvent.click(component);
    const marked = screen.queryByText('★');
    expect(marked).toBeTruthy();
  });
});
