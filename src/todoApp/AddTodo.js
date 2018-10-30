import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const styles = {
  root: {
    marginBottom: '0.5rem',
    padding: '0.5rem',
    backgroundColor: 'teal'
  }
}

export const AddTodo = ({ dispatch }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target[0].value;
    event.target[0].value = '';
    dispatch(addTodo(text));
  }

  return (
    <form onSubmit={ handleSubmit } style={ styles.root }>
      <input type="text"/>
      <button>Add new todo</button>
    </form>
  );
}

export default connect()(AddTodo);
