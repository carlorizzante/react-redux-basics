import { sample } from './utils';
import sampleTexts from './sampleTexts';

let ids = 0;

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: ids++,
    text: text || sample(sampleTexts)
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
