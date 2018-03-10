import React from 'react';
import { goRound } from './utils'

test('get all values from start', () => {
  const input = [1,2,3]
  const position = 0;
  expect(goRound(input, position)).toBe(input);
});

test('get all values from a position', () => {
  const input = [1, 2, 3 ,4, 5, 6, 7, 8]
  const output = [3, 4, 5, 6, 7, 8, 1, 2]
  const position = 2;
  expect(output).toEqual(goRound(input, position));
});

test('get all values from the last position', () => {
  const input = [1, 2, 3 ,4, 5, 6, 7, 8]
  const output = [8, 1, 2, 3, 4, 5, 6, 7]
  const position = 7;
  expect(output).toEqual(goRound(input, position));
});

test('position out of bounds exception is thrown', () => {
  const input = [1,2,3]
  const position = 6;
  expect(() => {goRound(input, position)}).toThrow(
    'Position not in bounds (min:1, max: index+1)'
  )
});
