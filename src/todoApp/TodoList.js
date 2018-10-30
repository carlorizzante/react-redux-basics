import React from 'react';
import Todo from './Todo';

const styles = {
  todos: {
    maxWidth: '600px'
  }
}

export default ({ todos, onTodoClick }) => {
  return (
    <>
      <h1>Todo List</h1>
      <ul style={ styles.todos }>
        { todos.map((todo, index) => (
          <Todo
            key={ index }
            todo={ todo }
            onClick={ onTodoClick(todo.id) }
          />
        ))}
      </ul>
    </>
  );
}
