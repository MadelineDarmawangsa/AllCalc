import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './HistoryButton.css';
import PopUp from './PopUp';

const HistoryButton = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = (e) => {
    e.preventDefault();
    setShowPopUp(!showPopUp);
  };

  return (
    <div>
      <button className="history-button" onClick={togglePopUp}>
        <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
      </button>
      {showPopUp && <PopUp closePopUp={togglePopUp} />}
    </div>
  );
};

export default HistoryButton;
