import React from 'react';
import './PopUp.css';

const PopUp = ({ closePopUp, history = [] }) => {
  const historyList = () => {
    return (
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>History</h2>
        {historyList()}
        <button className="close-button" onClick={closePopUp}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
