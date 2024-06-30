import React from 'react';
import './KeypadButton.css';

const KeypadButton = ({ symbol, onClick }) => {
  return (
    <button className="keypad-button" onClick={onClick(symbol)}>
      {symbol}
    </button>
  );
};

export default KeypadButton;
