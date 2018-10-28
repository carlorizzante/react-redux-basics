import React from 'react';

export default ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target[0].value;
    event.target[0].value = '';
    return onSubmit(text);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text"/>
      <button>Add new todo</button>
    </form>
  );
}
