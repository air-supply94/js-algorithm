import { longestPalindromeSubsequence } from '../longestPalindromeSubsequence';

test('longestPalindromeSubsequence', () => {
  expect(longestPalindromeSubsequence(''))
    .toBe(0);
  expect(longestPalindromeSubsequence('bbbab'))
    .toBe(4);
  expect(longestPalindromeSubsequence('cbbd'))
    .toBe(2);
});
