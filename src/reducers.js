let ids = 0;

export const todo = (todo, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: ids++,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      // if (todo.id !== action.id) return todo;
      // else return { ...todo, completed: !todo.completed };
      return {
        ...todo,
        completed: todo.id === action.id ? !todo.completed : todo.completed
      }
    default:
      return todo;
  }
}

// After, reducers composition
export const todos = (state = [], action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(null, action)
      ];
    case 'TOGGLE_TODO':
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
}

export const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

export const todoApp = (state = {}, action = {}) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

// Before, single reducer
// export const todos = (state = [], action = {}) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ];
//     case 'TOGGLE_TODO':
//       return state.map(todo => ({
//         ...todo,
//         completed: todo.id === action.id ? !todo.completed : todo.completed
//       }));
//     default:
//       return state;
//   }
// }
