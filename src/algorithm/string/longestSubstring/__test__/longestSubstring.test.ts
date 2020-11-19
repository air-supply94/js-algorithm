import { longestSubstring } from '../longestSubstring';

test('longest substring', () => {
  expect(longestSubstring(''))
    .toBe('');
  expect(longestSubstring('abcabcbb'))
    .toBe('abc');
  expect(longestSubstring('bbbbb'))
    .toBe('b');
  expect(longestSubstring('pwwkew'))
    .toBe('kew');
});
