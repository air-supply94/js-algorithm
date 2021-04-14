import { longestIncreasingSubsequence } from '../longestIncreasingSubsequence';

test('longestIncreasingSubsequence', () => {
  expect(longestIncreasingSubsequence([
    10,
    9,
    2,
    5,
    3,
    7,
    101,
    18,
  ]))
    .toBe(4);

  expect(longestIncreasingSubsequence([]))
    .toBe(0);
  expect(longestIncreasingSubsequence([1]))
    .toBe(1);
});

