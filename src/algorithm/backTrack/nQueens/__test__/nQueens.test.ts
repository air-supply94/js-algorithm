import { nQueens } from '../nQueens';

test('nQueens', () => {
  expect(nQueens(4))
    .toBe(2);
  expect(nQueens(5))
    .toBe(10);
  expect(nQueens(6))
    .toBe(4);
  expect(nQueens(7))
    .toBe(40);
  expect(nQueens(8))
    .toBe(92);
  expect(nQueens(9))
    .toBe(352);
  expect(nQueens(10))
    .toBe(724);
  expect(nQueens(11))
    .toBe(2680);
});
