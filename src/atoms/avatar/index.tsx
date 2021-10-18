/**
 * Component example
 */
import * as React from 'react';
import { Avatar, Span } from './styles';

interface avatarProps {
  letter: string;
  color?: string;
  fontColor?: string;
}

const avatar: React.FC<avatarProps> = ({ letter, color, fontColor }) => (
  <Avatar data-testid="containerAvatar" color={color}>
    <Span data-testid="letterAvatar" fontColor={fontColor}>
      {letter}
    </Span>
  </Avatar>
);

export default avatar;
