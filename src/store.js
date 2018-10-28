import { combineReducers, createStore } from 'redux';
import { todos, visibilityFilter } from './reducers';

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

const store = createStore(todoApp);

export default store;

// const combineReducersFromScratch = (reducers) => {
//   return (state = {}, action ={}) => {
//     return Object.keys(reducers)
//       .reduce((nextState, key) => {
//         // console.log("nextState:", nextState);
//         // console.log("key:", key);
//         // console.log("action.type:", action.type);
//         nextState[key] = reducers[key](
//           state[key], action
//         );
//         return nextState;
//       }, {});
//   };
// }

// const todoAppAlt = combineReducersFromScratch({
//   todos,
//   visibilityFilter
// });
// const store = createStore(todoAppAlt);
