import store from '../store';

import { sample } from '../utils';
import sampleTexts from '../sampleTexts';

store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'ADD_TODO', text: sample(sampleTexts) });
store.dispatch({ type: 'TOGGLE_TODO', id: store.getState().todos[2].id });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_ACTIVE" });
// store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: "SHOW_COMPLETED" });
