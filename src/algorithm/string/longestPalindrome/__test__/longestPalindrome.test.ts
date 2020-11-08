import { longestPalindrome } from '../longestPalindrome';

describe('longestPalindrome', () => {
  test('longestPalindrome for string', () => {
    expect(longestPalindrome('babad'))
      .toBe('bab');
    expect(longestPalindrome('cbbd'))
      .toBe('bb');
    expect(longestPalindrome(''))
      .toBe('');
  });
});
