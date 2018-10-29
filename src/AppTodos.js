import React, { Component } from 'react';

import AddTodo from './todoApp/AddTodo';
import ToggleTodos from './todoApp/ToggleTodos';
import VisibleTodoList from './todoApp/VisibleTodoList';

// Add some initial dummy todos
import './todoApp/setup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos!</h1>
        <AddTodo/>
        <ToggleTodos/>
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
