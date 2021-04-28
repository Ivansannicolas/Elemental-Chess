/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './AirMoveTileStyles.css';

export default function AirMoveTile({
  tile, moveToTile, characterPosition, tileSize,
}) {
  let isAtReach = false;

  if ((Math.abs(tile.x - characterPosition.x) <= 2 && tile.y === characterPosition.y)
  || (tile.x === characterPosition.x && Math.abs(tile.y - characterPosition.y) <= 2)
  || (Math.abs(tile.x - characterPosition.x) <= 1 && Math.abs(tile.y - characterPosition.y) <= 1)) {
    isAtReach = true;
  }

  return (
    <div
      className={isAtReach ? 'tile green' : 'tile'}
      style={{ width: tileSize.width, height: tileSize.height }}
      onClick={() => moveToTile(isAtReach, tile)}
    />
  );
}

AirMoveTile.propTypes = {
  tile: Proptypes.shape({
    character: { name: '' },
    onClick: () => {},
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
    background: 'white',
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
};

AirMoveTile.defaultProps = {
};
