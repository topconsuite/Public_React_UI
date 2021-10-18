/**
 * Component example
 */
import React, { useState } from 'react';

const Favorite: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favorite = '★';
  const notFavorite = '☆';

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <span
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={toggleFavorite}
      aria-hidden
    >
      {isFavorite ? favorite : notFavorite}
    </span>
  );
};

export default Favorite;
