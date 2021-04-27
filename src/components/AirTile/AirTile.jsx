/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './AirTileStyles.css';

export default function AirTile({
  tile, movingCharacter, setMovingCharacter, setCharacterPosition,
}) {
  function handleToMove() {
    setCharacterPosition({ x: tile.x, y: tile.y });

    if (movingCharacter === 'air' || (movingCharacter.length && movingCharacter !== 'air')) {
      setMovingCharacter('');
    } else {
      setMovingCharacter('air');
    }
  }

  return (
    <div
      className="airTile"
      onClick={() => handleToMove()}
    >
      Air
    </div>
  );
}

AirTile.propTypes = {
  tile: Proptypes.shape({
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
  }).isRequired,
  movingCharacter: Proptypes.string.isRequired,
  setMovingCharacter: Proptypes.func.isRequired,
  setCharacterPosition: Proptypes.func.isRequired,
};
