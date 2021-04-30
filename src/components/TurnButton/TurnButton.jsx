import React from 'react';
import Proptypes from 'prop-types';
import './TurnButtonStyles.css';

export default function TurnButton({ onClick, charactersMoved }) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={charactersMoved === 5 ? 'endTurn' : 'button'}
    >
      Fin del turno
    </button>
  );
}

TurnButton.propTypes = {
  onClick: Proptypes.func.isRequired,
  charactersMoved: Proptypes.number.isRequired,
};
