import React from 'react';
import { connect } from 'react-redux';

import { sample } from '../utils';
import sampleTexts from '../sampleTexts';

// const handleSubmit = dispatch => event => {
//   event.preventDefault();
//   const text = event.target[0].value;
//   event.target[0].value = '';
//   dispatch({
//     type: 'ADD_TODO',
//     text: text || sample(sampleTexts)
//   });
// }

export const AddTodo = ({ dispatch }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target[0].value;
    event.target[0].value = '';
    dispatch({
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // handleSubmit: handleSubmit(dispatch),
//     dispatch
//   }
// }

// export default connect(null, mapDispatchToProps)(AddTodo);
// export default connect(null, null)(AddTodo);
export default connect()(AddTodo);
