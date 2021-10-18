/**
 * Component example
 */
import * as React from 'react';

interface roleProps {
  description?: string;
}

const role: React.FC<roleProps> = ({ description = 'user role' }) => (
  <div style={{ fontSize: '6px' }}>{description}</div>
);

export default role;
