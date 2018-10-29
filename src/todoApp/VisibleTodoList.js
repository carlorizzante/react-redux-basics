import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

import TodoList from './TodoList';

const getVisibleTodos = ({ todos, visibilityFilter }) => {
  switch (visibilityFilter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
}

const handleToggleTodo = dispatch => (id) => event => {
  dispatch(toggleTodo(id));
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: handleToggleTodo(dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
