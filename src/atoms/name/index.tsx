/**
 * Component example
 */
import * as React from 'react';

interface nameAvatarProps {
  name?: string;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const name: React.FC<nameAvatarProps> = ({ name = 'user name' }) => (
  <div style={{ fontSize: '10px' }}>{name}</div>
);

export default name;
