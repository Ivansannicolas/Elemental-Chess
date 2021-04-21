/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import './TableStyles.css';

export default function Board() {
  const casillas = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={{
      width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <div className="table">
        <div style={{ display: 'flex' }}>
          {casillas.map((casilla, index) => (
            <div
              className="tile"
              style={{ color: index % 2 === 0 ? 'white' : 'black', backgroundColor: index % 2 === 0 ? 'grey' : 'white' }}
            >
              X
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
