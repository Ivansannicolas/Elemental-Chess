/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './CharacterTileStyles.css';

export default function CharacterTile({
  tile, movingCharacter, setMovingCharacter, movingTeam, setCharacterPosition, tileSize,
}) {
  const { name, hasMove } = tile;
  const className = `tile ${name}`;

  function handleToMove() {
    console.log('tile', tile);
    if (!tile.hasMove && movingTeam === tile.team) {
      const newPosition = { x: tile.x, y: tile.y, team: tile.team };
      setCharacterPosition(newPosition);

      if (movingCharacter.name === name || (movingCharacter.name?.length && movingCharacter.name !== name)) {
        setMovingCharacter({ name: '', team: 0 });
      } else {
        setMovingCharacter({ name, team: tile.team });
      }
    }
  }

  return (
    <div
      className={className}
      style={{ width: tileSize.width, height: tileSize.height }}
      onClick={() => handleToMove()}
    >
      {name}
    </div>
  );
}

CharacterTile.propTypes = {
  tile: Proptypes.shape({
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    team: Proptypes.number.isRequired,
    hasMove: Proptypes.number.isRequired,
  }).isRequired,
  tileSize: Proptypes.shape({
    width: Proptypes.oneOfType([
      Proptypes.string,
      Proptypes.number,
    ]).isRequired,
    height: Proptypes.oneOfType([
      Proptypes.string,
      Proptypes.number,
    ]).isRequired,
  }).isRequired,
  movingCharacter: Proptypes.shape({
    name: Proptypes.string.isRequired,
    team: Proptypes.number.isRequired,
  }).isRequired,
  setMovingCharacter: Proptypes.func.isRequired,
  movingTeam: Proptypes.number.isRequired,
  setCharacterPosition: Proptypes.func.isRequired,
};
