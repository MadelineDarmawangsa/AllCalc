import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import HistoryButton from './HistoryButton';
import KeypadButton from './KeypadButton';

function App() {
  const [equation, setEquation] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (symbol) => (e) => {
    e.preventDefault();
    let newEquation = equation + symbol;
    setEquation(newEquation);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let convertedEquation = equation.replace(/√(\d+)/g, 'sqrt($1)');
      let result = evaluate(convertedEquation).toString();
      setEquation(result);
      setHistory([...history, equation + ' = ' + result]);
    } catch {
      alert('invalid equation');
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let newEquation = equation.slice(0, -1);
    setEquation(newEquation);
  }

  return (
    <div className='outer'>
      <div className='calculator'>
        <form>
        <div className='display'>
          <div className='history'>
            <HistoryButton history={history} />
          </div>
            <div className='result'>
              <h2>{equation}</h2>
            </div>
          </div>
          <div className='keypad'>
            <div className='button-row'>
                <KeypadButton symbol="7" onClick={handleClick} />
                <KeypadButton symbol="8" onClick={handleClick} />
                <KeypadButton symbol="9" onClick={handleClick} />
                <KeypadButton symbol="/" onClick={handleClick} />
                <button onClick={handleDelete}>←</button>
              </div>
              <div className='button-row'>
                <KeypadButton symbol="4" onClick={handleClick} />
                <KeypadButton symbol="5" onClick={handleClick} />
                <KeypadButton symbol="6" onClick={handleClick} />
                <KeypadButton symbol="*" onClick={handleClick} />
                <KeypadButton symbol="%" onClick={handleClick} />
              </div>
              <div className='button-row'>
                <KeypadButton symbol="1" onClick={handleClick} />
                <KeypadButton symbol="2" onClick={handleClick} />
                <KeypadButton symbol="3" onClick={handleClick} />
                <KeypadButton symbol="-" onClick={handleClick} />
                <KeypadButton symbol="√" onClick={handleClick} />
              </div>
              <div className='button-row'>
                <KeypadButton symbol="0" onClick={handleClick} />
                <KeypadButton symbol="00" onClick={handleClick} />
                <KeypadButton symbol="." onClick={handleClick} />
                <KeypadButton symbol="+" onClick={handleClick} />
                <button onClick={handleSubmit} style={{ backgroundColor: 'gray' }}>=</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
