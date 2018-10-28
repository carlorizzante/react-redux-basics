import React from 'react';

export default ({ onIncrement, onDecrement, value }) => (
  <div className="counter">
    <h1>{ value }</h1>
    <button onClick={ onIncrement }>+</button>
    <button onClick={ onDecrement }>-</button>
  </div>
);
