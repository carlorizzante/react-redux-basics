import React from 'react';
import store from '../store';

export default none => {

  const handleSetVisibilityFilter = filter => event => {
    console.log(filter);
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }

  return (
    <div>
      <button onClick={ handleSetVisibilityFilter('SHOW_ALL') }
      >Show all</button>
      <button onClick={ handleSetVisibilityFilter('SHOW_ACTIVE') }
      >Show active</button>
      <button onClick={ handleSetVisibilityFilter('SHOW_COMPLETED') }
      >Show completed</button>
    </div>
  );
}
