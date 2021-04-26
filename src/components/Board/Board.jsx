/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import AirTile from '../AirTile/AirTile';
import Tile from '../Tile/Tile';
import './BoardStyles.css';

//  Qué debe llevar una casilla?
//  1. Si está ocupada o no,
//  2. Sus coordenadas ?

export default function Board() {
  const [clickedTile, setClickedTile] = useState(null);
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 2 });
  const [toMove, setToMove] = useState(false);
  const [board, setBoard] = useState([
    [{ }, { }, { }],
    [{ }, { }, { }],
    [{ }, { name: 'air' }, { }],
  ]);

  return (
    <div className="board">
      <div className="table">
        {board.map((row, rowIndex) => (
          row.map((tile, tileIndex) => {
            if (tile.name === 'air') {
              return (
                <AirTile
                  board={board}
                  setBoard={setBoard}
                  tile={board[rowIndex][tileIndex]}
                  clickedTile={clickedTile}
                  setClickedTile={setClickedTile}
                  toMove={toMove}
                  setToMove={setToMove}
                />
              );
            }
            return (
              <Tile
                board={board}
                setBoard={setBoard}
                tile={{ x: tileIndex, y: rowIndex }}
                toMove={toMove}
                setToMove={setToMove}
                characterPosition={characterPosition}
                setCharacterPosition={setCharacterPosition}
              />
            );
          })
        ))}
      </div>
    </div>
  );
}
