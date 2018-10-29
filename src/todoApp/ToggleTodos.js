import React from 'react';
import PropTypes from 'prop-types';

const ToggleTodos = (props, { store }) => {

  const handleSetVisibilityFilter = filter => event => {
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
ToggleTodos.contextTypes = {
  store: PropTypes.object
}

export default ToggleTodos;
