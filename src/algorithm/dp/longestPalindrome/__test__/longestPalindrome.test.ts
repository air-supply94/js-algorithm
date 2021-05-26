import { longestPalindrome } from '../longestPalindrome';

test('longestPalindrome', () => {
  expect(longestPalindrome('abacd'))
    .toBe('aba');
  expect(longestPalindrome('aacxycaa'))
    .toBe('aa');
  expect(longestPalindrome('babad'))
    .toBe('bab');
  expect(longestPalindrome('cbbd'))
    .toBe('bb');
  expect(longestPalindrome(''))
    .toBe('');
});
