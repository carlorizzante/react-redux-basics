import deepFreeze from 'deep-freeze';

import { todo, todos } from '../reducers.js';

test('should return default state if no action', () => {
  expect(todos()).toEqual([]);
});

test('should add new todo', () => {
  const todoA = {
    id: 0,
    text: "..."
  }
  const todoB = {
    id: 1,
    text: "---"
  }
  const stateA = [];
  const stateB = [{ ...todoA, completed: false }];

  deepFreeze(todoA);
  deepFreeze(todoB);
  deepFreeze(stateA);
  deepFreeze(stateB);

  const actionA = {
    type: 'ADD_TODO',
    ...todoA
  }
  const actionB = {
    type: 'ADD_TODO',
    ...todoB
  }

  deepFreeze(actionA);
  deepFreeze(actionB);

  expect(todos(stateA, actionA)).toEqual([...stateA, { ...todoA, completed: false }]);
  expect(todos(stateB, actionB)).toEqual([...stateB, { ...todoB, completed: false }]);
});

test('should toggle a todo by id', () => {
  const todoA = {
    id: 0,
    text: "...",
    completed: false
  }
  const todoB = {
    id: 1,
    text: "---",
    completed: true
  }
  const stateA = [ todoA, todoB ];
  const stateB = [ todoA, todoB ];

  deepFreeze(todoA);
  deepFreeze(todoB);
  deepFreeze(stateA);
  deepFreeze(stateB);

  const actionA = {
    type: 'TOGGLE_TODO',
    id: todoA.id
  }
  const actionB = {
    type: 'TOGGLE_TODO',
    id: todoB.id
  }

  deepFreeze(actionA);
  deepFreeze(actionB);

  expect(todos(stateA, actionA)).toEqual([ { ...todoA, completed: !todoA.completed }, todoB ]);
  expect(todos(stateB, actionB)).toEqual([todoA, { ...todoB, completed: !todoB.completed } ]);
});
