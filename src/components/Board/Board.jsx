/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';
import CharacterTile from '../CharacterTile/CharacterTile';
import AirMoveTile from '../AirMoveTile/AirMoveTile';
import WaterMoveTile from '../WaterMoveTile/WaterMoveTile';
import FireMoveTile from '../FireMoveTile/FireMoveTile';
import EarthMoveTile from '../EarthMoveTile/EarthMoveTile';
import './BoardStyles.css';

export default function Board() {
  const [movingCharacter, setMovingCharacter] = useState({ name: '', team: 0 });
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 5 });

  const tileSize = { width: '70px', height: '65px' };
  const airName = 'air';
  const fireName = 'fire';
  const waterName = 'water';
  const earthName = 'earth';

  const [board, setBoard] = useState([
    [{ }, { }, { }, { }, { }, { name: waterName, team: 2 }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { name: airName, team: 2 }, { name: earthName, team: 2 }, { name: fireName, team: 2 }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { name: airName, team: 1 }, { name: earthName, team: 1 }, { name: fireName, team: 1 }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { name: waterName, team: 1 }, { }, { }, { }, { }, { }, { }],
  ]);

  function moveToTile(isAtReach, tile) {
    if (isAtReach) {
      const newBoard = board.map((row, rowIndex) => {
        const newRow = row.map((actualTile, actualTileIndex) => {
          if ((rowIndex === tile.y && actualTileIndex === tile.x)) {
            return ({ name: movingCharacter.name, team: movingCharacter.team });
          }
          if (rowIndex === characterPosition.y && actualTileIndex === characterPosition.x) {
            return ({});
          }
          if (board[rowIndex][actualTileIndex].name) {
            return board[rowIndex][actualTileIndex];
          }
          return ({});
        });
        return newRow;
      });
      setBoard(newBoard);
      setMovingCharacter({ name: '', team: 0 });
      setCharacterPosition({ x: tile.x, y: tile.y });
    }
  }

  return (
    <div className="board">
      <div className="table">
        {board.map((row, rowIndex) => (
          row.map((tile, tileIndex) => {
            if (tile.name && tile.team) {
              return (
                <CharacterTile
                  tile={{
                    x: tileIndex, y: rowIndex, team: tile.team, name: tile.name,
                  }}
                  tileSize={tileSize}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter.name === airName) {
              return (
                <AirMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  moveToTile={moveToTile}
                  tileSize={tileSize}
                  movingCharacter={movingCharacter}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter.name === waterName) {
              return (
                <WaterMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  moveToTile={moveToTile}
                  tileSize={tileSize}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter.name === fireName) {
              return (
                <FireMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  moveToTile={moveToTile}
                  tileSize={tileSize}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter.name === earthName) {
              return (
                <EarthMoveTile
                  board={board}
                  setBoard={setBoard}
                  tile={{ x: tileIndex, y: rowIndex }}
                  moveToTile={moveToTile}
                  tileSize={tileSize}
                  setMovingCharacter={setMovingCharacter}
                  characterPosition={characterPosition}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            return (
              <Tile tileSize={tileSize} />
            );
          })
        ))}
      </div>
    </div>
  );
}
