import store from '../store';

import { addTodo, toggleTodo } from '../actions';
// import { setVisibilityFilter } from '../actions';

store.dispatch(addTodo());
store.dispatch(addTodo());
store.dispatch(addTodo());
store.dispatch(addTodo());
store.dispatch(toggleTodo(2));
// store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));
// store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
