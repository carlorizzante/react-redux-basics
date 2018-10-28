import React, { Component } from 'react';

import { sample } from './utils';

import store from './store';
import AddTodo from './todoApp/AddTodo';
import TodoList from './todoApp/TodoList';
import ToggleTodos from './todoApp/ToggleTodos';

const sampleTexts = [
  'Porta Fringilla Vestibulum',
  'Mollis Porta Malesuada',
  'Pharetra Ullamcorper Sollicitudin',
  'Porta Fusce Consectetur',
  'Porta Inceptos Ornare'
];

store.dispatch({ type: 'ADD_TODO', text: 'Pharetra Risus Porta' });
store.dispatch({ type: 'ADD_TODO', text: 'Amet Aenean Fermentum' });
store.dispatch({ type: 'ADD_TODO', text: 'Pharetra Tellus Fermentum' });
store.dispatch({ type: 'ADD_TODO', text: 'Pellentesque Mattis Dapibus' });
store.dispatch({ type: 'TOGGLE_TODO', id: store.getState().todos[1].id });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_ACTIVE" });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_COMPLETED" });

class App extends Component {

  state = {
    ...store.getState()
  }

  getVisibleTodos = none => {
    const { todos, visibilityFilter: filter } = this.state;
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }

  handleNewTodo = text => {
    store.dispatch({
      type: 'ADD_TODO',
      text: text || sample(sampleTexts)
    });
  }

  handleToggleTodo = id => event => {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  render() {
    const visibleTodos = this.getVisibleTodos();

    store.subscribe(none => this.setState({
      ...store.getState()
    }));

    return (
      <div className="App">
        <h1>Todos!</h1>
        <AddTodo onSubmit={ this.handleNewTodo }/>
        <ToggleTodos/>
        <TodoList
          todos={ visibleTodos }
          onTodoClick={ this.handleToggleTodo }
        />
      </div>
    );
  }
}

export default App;
