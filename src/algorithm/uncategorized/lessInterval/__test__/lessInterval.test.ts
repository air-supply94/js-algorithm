import { lessInterval } from '../lessInterval';

test('should lessInterval', () => {
  expect(lessInterval([
    'A',
    'A',
    'A',
    'B',
    'B',
    'B',
  ], 2))
    .toBe(8);
  expect(lessInterval([
    'A',
    'A',
    'B',
    'C',
    'D',
  ], 2))
    .toBe(5);
});
