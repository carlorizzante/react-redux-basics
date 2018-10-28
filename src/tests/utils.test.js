import { sample } from '../utils';
import deepFreeze from 'deep-freeze';

test('should return a random item from a give list', () => {
  const list = [1,2,3,4,5,6,7,8,9,10];
  deepFreeze(list);
  expect(sample(list)).toBeLessThan(Math.max(...list) + 1);
  expect(sample(list)).toBeGreaterThan(Math.min(...list) - 1);
});
