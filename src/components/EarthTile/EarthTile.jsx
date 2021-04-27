/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './EarthTileStyles.css';

export default function EarthTile({
  tile, movingCharacter, setMovingCharacter, setCharacterPosition,
}) {
  const airMove = { x: 0, y: 2 };

  function handleToMove() {
    setCharacterPosition({ x: tile.x, y: tile.y });

    if (movingCharacter === 'earth' || (movingCharacter.length && movingCharacter !== 'earth')) {
      setMovingCharacter('');
    } else {
      setMovingCharacter('earth');
    }
  }

  return (
    <div
      className="earthTile"
      onClick={() => handleToMove()}
    >
      Earth
    </div>
  );
}

EarthTile.propTypes = {
  tile: Proptypes.shape({
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
  }).isRequired,
  movingCharacter: Proptypes.string.isRequired,
  setMovingCharacter: Proptypes.func.isRequired,
  setCharacterPosition: Proptypes.func.isRequired,
};
