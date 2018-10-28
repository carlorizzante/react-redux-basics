import React, { Component } from 'react';

import { sample } from './utils';

import store from './store';
import AddTodo from './todoApp/AddTodo';
import ToggleTodos from './todoApp/ToggleTodos';
import VisibleTodoList from './todoApp/VisibleTodoList';

const sampleTexts = [
  'Porta Fringilla Vestibulum',
  'Mollis Porta Malesuada',
  'Pharetra Ullamcorper Sollicitudin',
  'Porta Fusce Consectetur',
  'Porta Inceptos Ornare',
  'Vulputate Egestas Pellentesque',
  'Justo Purus Etiam',
  'Magna Dolor Ornare'
];

store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'TOGGLE_TODO', id: store.getState().todos[1].id });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_ACTIVE" });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_COMPLETED" });

class App extends Component {

  handleNewTodo = text => {
    store.dispatch({
      type: 'ADD_TODO',
      text: text || sample(sampleTexts)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todos!</h1>
        <AddTodo onSubmit={ this.handleNewTodo }/>
        <ToggleTodos/>
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
