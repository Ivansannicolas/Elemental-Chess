/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './WaterTileStyles.css';

export default function WaterTile({
  tile, movingCharacter, setMovingCharacter, setCharacterPosition,
}) {
  const airMove = { x: 0, y: 2 };

  function handleToMove() {
    setCharacterPosition({ x: tile.x, y: tile.y });

    if (movingCharacter === 'water' || (movingCharacter.length && movingCharacter !== 'water')) {
      setMovingCharacter('');
    } else {
      setMovingCharacter('water');
    }
  }

  return (
    <div
      className="waterTile"
      onClick={() => handleToMove()}
    >
      Water
    </div>
  );
}

WaterTile.propTypes = {
  tile: Proptypes.shape({
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
  }).isRequired,
  movingCharacter: Proptypes.string.isRequired,
  setMovingCharacter: Proptypes.func.isRequired,
  setCharacterPosition: Proptypes.func.isRequired,
};
