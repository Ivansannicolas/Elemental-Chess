/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import './TileStyles.css';

export default function Tile({ tileSize }) {
  return (
    <div
      className="tile"
      style={{ width: tileSize.width, height: tileSize.height }}
    />
  );
}

Tile.propTypes = {
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
