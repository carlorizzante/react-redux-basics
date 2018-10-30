import React, { Component } from 'react';

import AddTodo from './todoApp/AddTodo';
import ToggleTodos from './todoApp/ToggleTodos';
import VisibleTodoList from './todoApp/VisibleTodoList';

import Notification from './todoApp/Notification';

// Add some initial dummy todos
import './todoApp/setup';

const styles = {
  root: {
    margin: '1rem'
  }
}

class App extends Component {

  render() {
    return (
      <div className="App" style={ styles.root }>
        <Notification>
          <p>Hello there!</p>
        </Notification>
        <AddTodo/>
        <ToggleTodos/>
        <VisibleTodoList/>
      </div>
    );
  }
}

export default App;
