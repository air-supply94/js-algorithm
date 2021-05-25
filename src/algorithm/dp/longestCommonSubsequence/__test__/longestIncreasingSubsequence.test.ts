import { longestCommonSubsequenceDp, longestCommonSubsequenceRecursion } from '../longestCommonSubsequence';

test('longestCommonSubsequenceRecursion', () => {
  expect(longestCommonSubsequenceRecursion('', 'a'))
    .toBe(0);
  expect(longestCommonSubsequenceRecursion('a', '0'))
    .toBe(0);
  expect(longestCommonSubsequenceRecursion('abcde', 'ace'))
    .toBe(3);
  expect(longestCommonSubsequenceRecursion('abc', 'abc'))
    .toBe(3);
  expect(longestCommonSubsequenceRecursion('abc', 'def'))
    .toBe(0);
});

test('longestCommonSubsequenceDp', () => {
  expect(longestCommonSubsequenceDp('', 'a'))
    .toBe(0);
  expect(longestCommonSubsequenceDp('a', '0'))
    .toBe(0);
  expect(longestCommonSubsequenceDp('abcde', 'ace'))
    .toBe(3);
  expect(longestCommonSubsequenceDp('abc', 'abc'))
    .toBe(3);
  expect(longestCommonSubsequenceDp('abc', 'def'))
    .toBe(0);
});
