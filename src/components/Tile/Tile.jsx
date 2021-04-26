/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './TileStyles.css';

export default function Tile({
  board, setBoard, tile, toMove, setToMove, setCharacterPosition,
}) {
  function moveToTile() {
    if (toMove) {
      const newBoard = board.map((row, rowIndex) => {
        const newRow = row.map((actualTile, actualTileIndex) => {
          if (rowIndex === tile.y && actualTileIndex === tile.x) {
            return ({ name: 'air' });
          }
          return ({});
        });
        return newRow;
      });
      setBoard(newBoard);
      setToMove(false);
      setCharacterPosition({ x: tile.x, y: tile.y });
    }
  }

  return (
    <div
      className={toMove ? 'tile green' : 'tile'}
      onClick={() => moveToTile()}
    />
  );
}

Tile.propTypes = {
  board: Proptypes.arrayOf(Proptypes.arrayOf(Proptypes.shape({
    background: 'red',
  }))).isRequired,
  tile: Proptypes.shape({
    character: { name: '' },
    onClick: () => {},
    x: Proptypes.number.isRequired,
    y: Proptypes.number.isRequired,
    background: 'white',
  }).isRequired,
  setBoard: Proptypes.func.isRequired,
};

Tile.defaultProps = {
};
