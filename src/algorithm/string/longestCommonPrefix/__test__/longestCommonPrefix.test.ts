import { longestCommonPrefix } from '../longestCommonPrefix';

describe('longestCommonPrefix', () => {
  test('longestCommonPrefix for string', () => {
    expect(longestCommonPrefix([]))
      .toBe('');
    expect(longestCommonPrefix(['abcde']))
      .toBe('abcde');
    expect(longestCommonPrefix([
      'flower',
      'flow',
      'flight',
    ]))
      .toBe('fl');
    expect(longestCommonPrefix([
      'dog',
      'racecar',
      'car',
    ]))
      .toBe('');
  });
});
