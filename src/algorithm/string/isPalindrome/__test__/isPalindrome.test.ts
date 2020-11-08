import { isPalindrome } from '../isPalindrome';

describe('isPalindrome', () => {
  test('string is palindrome', () => {
    expect(isPalindrome(''))
      .toBeTruthy();
    expect(isPalindrome('amanaplanacanalpanama'))
      .toBeTruthy();
    expect(isPalindrome('raceacar'))
      .toBeFalsy();
  });
});
