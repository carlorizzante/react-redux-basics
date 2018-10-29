import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';

export default class VisibleTodoList extends Component {

  state = {
    ...this.context.store.getState()
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

  handleToggleTodo = id => event => {
    this.context.store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  render() {
    const { store } = this.context;

    store.subscribe(none => this.setState({
      ...store.getState()
    }));

    return (
      <TodoList
        todos={ this.getVisibleTodos() }
        onTodoClick={ this.handleToggleTodo }
      />
    );
  }
}
VisibleTodoList.contextTypes = {
  store: PropTypes.object
}
