import { longestIncreasingSubsequence, longestIncreasingSubsequenceBs } from '../longestIncreasingSubsequence';

const array1 = [
  10,
  9,
  2,
  2,
  5,
  3,
  7,
  7,
  101,
  18,
];

const array2 = [
  6,
  3,
  5,
  5,
  10,
  11,
  2,
  9,
  9,
  14,
  13,
  7,
  7,
  4,
  8,
  12,
];

test('longestIncreasingSubsequence', () => {
  expect(longestIncreasingSubsequence(array1))
    .toBe(4);

  expect(longestIncreasingSubsequence(array2))
    .toBe(5);

  expect(longestIncreasingSubsequence([]))
    .toBe(0);

  expect(longestIncreasingSubsequence([1]))
    .toBe(1);
});

test('longestIncreasingSubsequenceBs', () => {
  expect(longestIncreasingSubsequenceBs(array1))
    .toBe(4);

  expect(longestIncreasingSubsequenceBs(array2))
    .toBe(5);

  expect(longestIncreasingSubsequenceBs([]))
    .toBe(0);

  expect(longestIncreasingSubsequenceBs([
    1,
    1,
    1,
    1,
    1,
  ]))
    .toBe(1);
});

