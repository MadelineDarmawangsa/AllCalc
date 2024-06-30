import './App.css';
import {React, useState} from 'react';
import { evaluate} from 'mathjs';
import HistoryButton from './HistoryButton';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>



function App() {
  const [equation, setEquation]= useState('');

  const handleClick = (symbol) => (e) => {
    e.preventDefault();
    let newEquation = equation+symbol;
    setEquation(newEquation);
  }

  const handleSubmit = (symbol) => (e) => {
    e.preventDefault();
    try {
      let convertedEquation = equation.replace(/√(\d+)/g, 'sqrt($1)');
      let result = evaluate(convertedEquation).toString();
      setEquation(result);
    }
    catch {
      alert('invalid equation');
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    let newEquation = equation.slice(0,-1);
    setEquation(newEquation);
  }


  return (
    <div className='outer'>
      <div className='left'>
        <div className = 'popup'></div>
      </div>
      <div className='calculator'>
      <form>
        <div className='display'>
          <div className = 'history'>
            {/* <HistoryButton/> */}
          </div>
          <div className = 'result'>
            <h2>{equation}</h2>
          </div>
        </div>

        <div className="keypad">
        <div className = "button-row">
          <button onClick={handleClick('7')}>7</button>
          <button onClick={handleClick('8')}>8</button>
          <button onClick={handleClick('9')}>9</button>
          <button onClick={handleClick('/')}>÷</button>
          <button onClick = {handleDelete}>←</button>
        </div>
        
        <div className = "button-row">
          <button onClick={handleClick('4')}>4</button>
          <button onClick={handleClick('5')}>5</button>
          <button onClick={handleClick('6')}>6</button>
          <button onClick={handleClick('*')}>x</button>
          <button onClick={handleClick('%')}>%</button>
        </div>

        <div className = "button-row">
          <button onClick={handleClick('1')}>1</button>
          <button onClick={handleClick('2')}>2</button>
          <button onClick={handleClick('3')}>3</button>
          <button onClick={handleClick('-')}>-</button>
          <button onClick={handleClick('√')}>√</button>
        </div>

        <div className = "button-row">
          <button onClick={handleClick('0')}>0</button>
          <button onClick={handleClick('00')}>00</button>
          <button onClick={handleClick('.')}>.</button>
          <button onClick={handleClick('+')}>+</button>
          <button onClick={handleSubmit()} style={{backgroundColor:'gray'}}>=</button>
        </div>
        </div>

      </form>
    </div>
    </div>
  
  );
}

export default App;
