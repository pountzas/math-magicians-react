import React from 'react';
// import PropTypes from 'prop-types';
import './Calculator.css';

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
          <div className="key">AC</div>
          <div className="key">+/-</div>
          <div className="key">%</div>
          <div className="key">÷</div>
          <div className="key">7</div>
          <div className="key">8</div>
          <div className="key">9</div>
          <div className="key">x</div>
          <div className="key">4</div>
          <div className="key">5</div>
          <div className="key">6</div>
          <div className="key">-</div>
          <div className="key">1</div>
          <div className="key">2</div>
          <div className="key">3</div>
          <div className="key">+</div>
          <div className="key">0</div>
          <div className="key">.</div>
          <div className="key">=</div>
        </div>

      </div>
    );
  }
}

export default Calculator;
