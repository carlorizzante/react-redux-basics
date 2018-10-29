import React from 'react';
import PropTypes from 'prop-types';

import { sample } from '../utils';
import sampleTexts from '../sampleTexts';

const AddTodo = (props, { store }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target[0].value;
    event.target[0].value = '';
    store.dispatch({
      type: 'ADD_TODO',
      text: text || sample(sampleTexts)
    });
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text"/>
      <button>Add new todo</button>
    </form>
  );
}
AddTodo.contextTypes = {
  store: PropTypes.object
}

export default AddTodo;
