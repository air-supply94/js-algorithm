import { minFallingPathSum } from '../minFallingPathSum';

test('minFallingPathSum', () => {
  expect(minFallingPathSum([]))
    .toBe(0);

  expect(minFallingPathSum([[1]]))
    .toBe(1);

  expect(minFallingPathSum([
    [
      -19,
      57,
    ],
    [
      -40,
      -5,
    ],
  ]))
    .toBe(-59);

  expect(minFallingPathSum([
    [
      2,
      1,
      3,
    ],
    [
      6,
      5,
      4,
    ],
    [
      7,
      8,
      9,
    ],
  ]))
    .toBe(13);
});
