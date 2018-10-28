import React, { Component } from 'react';
// import { createStore } from 'redux';
import { createStore } from './reduxDemo';

import Counter from './Counter';

import './App.css';

// export const counter = (state, action) => {
//   if (state === undefined) return 0;
//   if (action.type === 'INCREMENT') return state + 1;
//   if (action.type === 'DECREMENT') return state - 1;
//   return state;
// }

export const counter = (state = 0, action = {}) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

const store = createStore(counter);

console.log('initial state:', store.getState());

store.subscribe(() => {
  console.log('new state:', store.getState());
});
//
// store.dispatch({ type: 'DECREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });

class App extends Component {

  state = {
    value: store.getState()
  }

  handleIncrement = () => {
    store.dispatch({ type: 'INCREMENT' });
    this.setState({ value: store.getState() });
  }

  handleDecrement = () => {
    store.dispatch({ type: 'DECREMENT' });
    this.setState({ value: store.getState() });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <Counter
          onIncrement={ this.handleIncrement }
          onDecrement={ this.handleDecrement }
          value={ value }
        />
      </div>
    );
  }
}

export default App;
