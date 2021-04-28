/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './CharacterTileStyles.css';

export default function CharacterTile({
  tile, movingCharacter, setMovingCharacter, setCharacterPosition, tileSize,
}) {
  const { name } = tile;
  const className = `tile ${name}`;

  function handleToMove() {
    const newPosition = { x: tile.x, y: tile.y, team: tile.team };
    console.log('newPosition', newPosition);
    console.log('tile', tile);
    setCharacterPosition(newPosition);

    if (movingCharacter.name === name || (movingCharacter.name?.length && movingCharacter.name !== name)) {
      setMovingCharacter({ name: '', team: 0 });
    } else {
      setMovingCharacter({ name, team: tile.team });
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
  setCharacterPosition: Proptypes.func.isRequired,
};
