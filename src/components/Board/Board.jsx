/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Tile from '../Tile/Tile';
import CharacterTile from '../CharacterTile/CharacterTile';
import AirMoveTile from '../MoveTiles/AirMoveTile/AirMoveTile';
import WaterMoveTile from '../MoveTiles/WaterMoveTile/WaterMoveTile';
import FireMoveTile from '../MoveTiles/FireMoveTile/FireMoveTile';
import EarthMoveTile from '../MoveTiles/EarthMoveTile/EarthMoveTile';
import LightningMoveTile from '../MoveTiles/LightningMoveTile/LightningMoveTile';
import TurnButton from '../TurnButton/TurnButton';
import './BoardStyles.css';

export default function Board() {
  const [movingCharacter, setMovingCharacter] = useState({ name: '', team: 0 });
  const [movingTeam, setMovingTeam] = useState(1);
  const [charactersMoved, setCharactersMoved] = useState(0);
  const [characterPosition, setCharacterPosition] = useState({ x: 1, y: 5, team: 0 });

  const tileSize = { width: '70px', height: '65px' };
  const airCharacter = { name: 'air', health: 3 };
  const fireCharacter = { name: 'fire', health: 3 };
  const waterCharacter = { name: 'water', health: 3 };
  const earthCharacter = { name: 'earth', health: 3 };
  const lightningCharacter = { name: 'lightning', health: 3 };

  const [board, setBoard] = useState([
    [{ }, { }, { }, { }, { ...lightningCharacter, team: 2 }, { ...waterCharacter, team: 2 }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { ...fireCharacter, team: 2 }, { ...earthCharacter, team: 2 }, { ...airCharacter, team: 2 }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { ...fireCharacter, team: 1 }, { ...earthCharacter, team: 1 }, { ...airCharacter, team: 1 }, { }, { }, { }, { }],
    [{ }, { }, { }, { }, { }, { ...lightningCharacter, team: 1 }, { ...waterCharacter, team: 1 }, { }, { }, { }, { }, { }],
  ]);

  function moveToTile(isAtReach, tile) {
    if (isAtReach) {
      const newBoard = board.map((row, rowIndex) => {
        const newRow = row.map((actualTile, actualTileIndex) => {
          if ((rowIndex === tile.y && actualTileIndex === tile.x)) {
            return ({ ...movingCharacter, hasMove: true });
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
      setCharactersMoved(charactersMoved + 1);
    }
  }

  function resetTurns(boardObject) {
    const newBoard = boardObject.board.map((row) => {
      const newRow = row.map((tile) => {
        const newTile = { ...tile };
        if (newTile.name) {
          newTile.hasMove = false;
        }
        return newTile;
      });
      return newRow;
    });
    boardObject.setBoard(newBoard);
    if (boardObject.movingTeam === 1) {
      boardObject.setMovingTeam(2);
    } else if (boardObject.movingTeam === 2) {
      boardObject.setMovingTeam(1);
    }
    boardObject.setCharactersMoved(0);
  }

  return (
    <div className="board">
      <div className="table">
        {board.map((row, rowIndex) => (
          row.map((tile, tileIndex) => {
            if (tile.name && tile.team) {
              return (
                <CharacterTile
                  tile={{ ...tile, x: tileIndex, y: rowIndex }}
                  tileSize={tileSize}
                  movingCharacter={movingCharacter}
                  movingTeam={movingTeam}
                  setMovingCharacter={setMovingCharacter}
                  setCharacterPosition={setCharacterPosition}
                />
              );
            }
            if (movingCharacter.name === airCharacter.name) {
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
            if (movingCharacter.name === waterCharacter.name) {
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
            if (movingCharacter.name === fireCharacter.name) {
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
            if (movingCharacter.name === earthCharacter.name) {
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
            if (movingCharacter.name === lightningCharacter.name) {
              return (
                <LightningMoveTile
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
      <TurnButton
        charactersMoved={charactersMoved}
        onClick={() => resetTurns({
          board,
          setBoard,
          movingTeam,
          setMovingTeam,
          setCharactersMoved,
        })}
      />
    </div>
  );
}
