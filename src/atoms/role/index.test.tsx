import { render, screen } from '@testing-library/react';
import Role from './index';

describe('role component', () => {
  it('should render the component', () => {
    render(<Role />);
    const found = screen.queryByText(/user role/i);
    expect(found).toBeTruthy();
  });
  it('should show Software Engineer role', () => {
    render(<Role description="Software Engineer" />);
    const found = screen.queryByText(/software Engineer/i);
    expect(found).toBeTruthy();
  });
});
