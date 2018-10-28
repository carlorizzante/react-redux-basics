import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { counter } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should setup initial state', () => {
  expect(counter()).toBe(0);
})

it('should increment', () => {
  expect(counter(0, { type: 'INCREMENT'})).toBe(1);
  expect(counter(-3, { type: 'INCREMENT'})).toBe(-2);
  expect(counter(4, { type: 'INCREMENT'})).toBe(5);
});

it('should decrement', () => {
  expect(counter(0, { type: 'DECREMENT'})).toBe(-1);
  expect(counter(3, { type: 'DECREMENT'})).toBe(2);
  expect(counter(-7, { type: 'DECREMENT'})).toBe(-8);
});

it('should do nothing for unknown action', () => {
  expect(counter(0, {})).toBe(0);
  expect(counter(3, {})).toBe(3);
  expect(counter(-7, {})).toBe(-7);
});
