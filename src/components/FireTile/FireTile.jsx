/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './FireTileStyles.css';

export default function FireTile({
  tile, movingCharacter, setMovingCharacter, setCharacterPosition,
}) {
  function handleToMove() {
    setCharacterPosition({ x: tile.x, y: tile.y });

    if (movingCharacter === 'fire' || (movingCharacter.length && movingCharacter !== 'fire')) {
      setMovingCharacter('');
    } else {
      setMovingCharacter('fire');
    }
  }

  return (
    <div
      className="fireTile"
      onClick={() => handleToMove()}
    >
      Fire
    </div>
  );
}

FireTile.propTypes = {
  tile: Proptypes.shape({
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
  }).isRequired,
  movingCharacter: Proptypes.string.isRequired,
  setMovingCharacter: Proptypes.func.isRequired,
  setCharacterPosition: Proptypes.func.isRequired,
};
