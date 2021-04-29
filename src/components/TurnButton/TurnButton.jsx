import React from 'react';
import Proptypes from 'prop-types';

export default function TurnButton({ onClick }) {
  return (
    <button
      type="button"
      style={{ padding: '10px', marginLeft: '30px' }}
      onClick={() => onClick()}
    >
      Fin del turno
    </button>
  );
}

TurnButton.propTypes = {
  onClick: Proptypes.func.isRequired,
};
