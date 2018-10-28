import React from 'react';

const styles = {
  todo: {
    // display: 'inline-block',
    width: '50%',
    cursor: 'pointer',
    // backgroundColor: 'teal'
  },
  completed: {
    textDecoration: 'line-through'
    // backgroundColor: 'red'
  }
}

export default ({ onClick, todo }) => {
  const { text, completed } = todo;
  
  return (
    <li
      onClick={ onClick }
      style={ completed ? { ...styles.todo, ...styles.completed } : styles.todo }
    >
      { text }
    </li>
  );
}
