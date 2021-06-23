import { diffWaysToCompute } from '../diffWaysToCompute';

test('diffWaysToCompute', () => {
  expect(diffWaysToCompute(''))
    .toEqual([]);

  expect(diffWaysToCompute('2-1-1'))
    .toEqual([
      0,
      2,
    ]);

  expect(diffWaysToCompute('1+2*3'))
    .toEqual([
      7,
      9,
    ]);

  expect(diffWaysToCompute('2*3-4*5'))
    .toEqual([
      -34,
      -14,
      -10,
      -10,
      10,
    ]);
});
