import React from 'react';
import './PopUp.css';

const PopUp = ({ closePopUp }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Popup Title</h2>
        <p>This is the popup content.</p>
        <button className="close-button" onClick={closePopUp}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
