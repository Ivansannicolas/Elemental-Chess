/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './EarthMoveTileStyles.css';

export default function EarthMoveTile({
  board, setBoard, tile, setMovingCharacter, characterPosition, setCharacterPosition,
}) {
  let isAtReach = false;

  if ((Math.abs(tile.x - characterPosition.x) <= 1 && Math.abs(tile.y - characterPosition.y) <= 1)) {
    isAtReach = true;
  }

  function moveToTile() {
    if (isAtReach) {
      const newBoard = board.map((row, rowIndex) => {
        const newRow = row.map((actualTile, actualTileIndex) => {
          if (rowIndex === tile.y && actualTileIndex === tile.x) {
            return ({ name: 'earth' });
          }
          if (board[rowIndex][actualTileIndex].name !== 'earth') {
            return board[rowIndex][actualTileIndex];
          }
          return ({});
        });
        return newRow;
      });
      setBoard(newBoard);
      setMovingCharacter('');
      setCharacterPosition({ x: tile.x, y: tile.y });
    }
  }

  return (
    <div
      className={isAtReach ? 'tile green' : 'tile'}
      onClick={() => moveToTile()}
    />
  );
}

EarthMoveTile.propTypes = {
  board: Proptypes.arrayOf(Proptypes.arrayOf(Proptypes.shape({}))).isRequired,
  tile: Proptypes.shape({
    character: { name: '' },
    onClick: () => {},
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
    background: 'white',
  }).isRequired,
  setBoard: Proptypes.func.isRequired,
};