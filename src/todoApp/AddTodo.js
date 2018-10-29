import React from 'react';
import store from '../store';

import { sample } from '../utils';
import sampleTexts from '../sampleTexts';

export default () => {

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
