import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">
          0
        </div>

        <div className="keyboard">
          <button type="button" className="key" onClick={() => { this.onClickHandler('AC'); }}>AC</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('+/-'); }}>+/-</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('%'); }}>%</button>
          <button type="button" className="key orange" onClick={() => { this.onClickHandler('÷'); }}>÷</button>

          <button type="button" className="key" onClick={() => { this.onClickHandler('7'); }}>7</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('8'); }}>8</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('9'); }}>9</button>
          <button type="button" className="key orange" onClick={() => { this.onClickHandler('x'); }}>x</button>

          <button type="button" className="key" onClick={() => { this.onClickHandler('4'); }}>4</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('5'); }}>5</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('6'); }}>6</button>
          <button type="button" className="key orange" onClick={() => { this.onClickHandler('-'); }}>-</button>

          <button type="button" className="key" onClick={() => { this.onClickHandler('1'); }}>1</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('2'); }}>2</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('3'); }}>3</button>
          <button type="button" className="key orange" onClick={() => { this.onClickHandler('+'); }}>+</button>

          <button type="button" className="key zero" onClick={() => { this.onClickHandler('0'); }}>0</button>
          <button type="button" className="key" onClick={() => { this.onClickHandler('.'); }}>.</button>
          <button type="button" className="key orange" onClick={() => { this.onClickHandler('='); }}>=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
