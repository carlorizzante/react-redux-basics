import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';

export const ToggleTodos = ({ dispatch }) => {

  const handleSetVisibilityFilter = filter => event => {
    dispatch(setVisibilityFilter(filter));
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

export default connect()(ToggleTodos);
