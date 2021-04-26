/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import Proptypes from 'prop-types';
import './AirTileStyles.css';

export default function AirTile({
  board, setBoard, setClickedTile, setToMove,
}) {
  return (
    <div
      className="airTile"
      onClick={() => setToMove(true)}
    >
      Air
    </div>
  );
}

AirTile.propTypes = {
  board: Proptypes.arrayOf(Proptypes.arrayOf(Proptypes.shape({
    background: 'red',
  }))).isRequired,
  setBoard: Proptypes.func.isRequired,
  setClickedTile: Proptypes.func.isRequired,
};