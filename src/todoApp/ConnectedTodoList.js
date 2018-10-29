import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const styles = {
  todos: {
    maxWidth: '600px'
  }
}

export const TodoList = ({ todos, handleToggleTodo }) => {
  const visibleTodos = todos();
  return (
    <ul style={ styles.todos }>
      { visibleTodos.map((todo, index) => (
        <Todo
          key={ index }
          todo={ todo }
          onClick={ handleToggleTodo(todo.id) }
        />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: (none) => {
      const { todos, visibilityFilter: filter } = state;
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (id) => event => {
      this.context.store.dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
