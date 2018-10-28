import deepFreeze from 'deep-freeze';

const addCounter = (list) => [...list, 0];

const removeCounter = (list, index) => [
  ...list.slice(0, index),
  ...list.slice(index + 1)
];

const incrementCounter = (list, index) => [
  ...list.slice(0, index),
  list[index] + 1,
  ...list.slice(index + 1)
];

const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
});

const toggleTodoAlt = (todo) => Object.assign(
  {},
  todo,
  { completed: !todo.completed }
);

test('should properly add a new counter to the counters list', () => {
  const listA = [];
  const listB = [0,1];
  const listC = [1,3,2];

  deepFreeze(listA);
  deepFreeze(listB);
  deepFreeze(listC);

  expect(addCounter(listA)).toEqual([...listA, 0]);
  expect(addCounter(listB)).toEqual([...listB, 0]);
  expect(addCounter(listC)).toEqual([...listC, 0]);
});

test('should properly remove new counter from the counters list', () => {
  const listA = [3];
  const listB = [3,2];
  const listC = [2,3,7,4];

  deepFreeze(listA);
  deepFreeze(listB);
  deepFreeze(listC);

  expect(removeCounter(listA, 0)).toEqual([]);
  expect(removeCounter(listB, 1)).toEqual([3]);
  expect(removeCounter(listC, 2)).toEqual([2,3,4]);
});

test('should properly increment counter by index', () => {
  const listA = [3];
  const listB = [3,2];
  const listC = [2,3,7,4];

  deepFreeze(listA);
  deepFreeze(listB);
  deepFreeze(listC);

  expect(incrementCounter(listA, 0)).toEqual([4]);
  expect(incrementCounter(listB, 0)).toEqual([4,2]);
  expect(incrementCounter(listC, 2)).toEqual([2,3,8,4]);
});

test('should toggle a given todo', () => {
  const todoA = {
    id: 0,
    text: '...',
    completed: false
  }
  const todoB = {
    id: 0,
    text: '...',
    completed: true
  }

  deepFreeze(todoA);
  deepFreeze(todoB);

  expect(toggleTodo(todoA)).toEqual({...todoA, completed: !todoA.completed });
  expect(toggleTodo(todoB)).toEqual({...todoB, completed: !todoB.completed });
});

test('should toggle a given todo (alt version)', () => {
  const todoA = {
    id: 0,
    text: '...',
    completed: false
  }
  const todoB = {
    id: 0,
    text: '...',
    completed: true
  }

  deepFreeze(todoA);
  deepFreeze(todoB);

  expect(toggleTodoAlt(todoA)).toEqual({...todoA, completed: !todoA.completed });
  expect(toggleTodoAlt(todoB)).toEqual({...todoB, completed: !todoB.completed });
});
