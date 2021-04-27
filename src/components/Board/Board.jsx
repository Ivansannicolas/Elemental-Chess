/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';
import AirTile from '../AirTile/AirTile';
import AirMoveTile from '../AirTile/AirMoveTile/AirMoveTile';
import WaterTile from '../WaterTile/WaterTile';
import WaterMoveTile from '../WaterTile/WaterMoveTile/WaterMoveTile';

import './BoardStyles.css';
import FireTile from '../FireTile/FireTile';
import FireMoveTile from '../FireTile/FireMoveTile/FireMoveTile';
import EarthTile from '../EarthTile/EarthTile';
import EarthMoveTile from '../EarthTile/EarthMoveTile/EarthMoveTile';

//  Qué debe llevar una casilla?
//  1. Si está ocupada o no,
//  2. Sus coordenadas ?

export default function Board() {
  const [movingCharacter, setMovingCharacter] = useState('');
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 5 });
  const [toMove, setToMove] = useState(false);
  const [board, setBoard] = useState([
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { name: 'earth' }, { }, { name: 'fire' }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { name: 'air' }, { }, { name: 'water' }, { }, { }, { }],
  ]);

  return (
    <div className="board">
      <div className="table">
        {board.map((row, rowIndex) => (
          row.map((tile, tileIndex) => {
            if (tile.name === 'air') {
              return (
                <AirTile
                  tile={{ x: tileIndex, y: rowIndex }}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (tile.name === 'water') {
              return (
                <WaterTile
                  tile={{ x: tileIndex, y: rowIndex }}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (tile.name === 'fire') {
              return (
                <FireTile
                  tile={{ x: tileIndex, y: rowIndex }}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (tile.name === 'earth') {
              return (
                <EarthTile
                  tile={{ x: tileIndex, y: rowIndex }}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter === 'air') {
              return (
                <AirMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter === 'water') {
              return (
                <WaterMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter === 'fire') {
              return (
                <FireMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter === 'earth') {
              return (
                <EarthMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            return (
              <Tile />
            );
          })
        ))}
      </div>
    </div>
  );
}
