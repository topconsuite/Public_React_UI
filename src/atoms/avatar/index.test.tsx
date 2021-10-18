import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from './index';

describe('avatar component', () => {
  it('should render the component', () => {
    render(<Avatar letter="A" />);

    const avatarComponent = screen.queryByText('A');
    expect(avatarComponent).toBeTruthy();
  });

  it('should have a red background color', () => {
    render(<Avatar letter="A" />);

    const avatarComponent = screen.getByTestId('containerAvatar');
    expect(avatarComponent).toHaveStyle('background-color: red');
  });

  it('should have a purple background color', () => {
    render(<Avatar letter="A" color="purple" />);

    const avatarComponent = screen.getByTestId('containerAvatar');
    expect(avatarComponent).toHaveStyle('background-color: purple');
  });

  it('should have a yellow font color', () => {
    render(<Avatar letter="A" fontColor="yellow" />);

    const avatarComponent = screen.getByTestId('letterAvatar');
    expect(avatarComponent).toHaveStyle('color: yellow');
  });
});
