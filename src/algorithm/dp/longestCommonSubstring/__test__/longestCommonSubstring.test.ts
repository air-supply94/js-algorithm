import { longestCommonSubstring } from '../longestCommonSubstring';

test('longestCommonSubstring', () => {
  expect(longestCommonSubstring('', ''))
    .toBe('');
  expect(longestCommonSubstring('ABC', ''))
    .toBe('');
  expect(longestCommonSubstring('', 'ABC'))
    .toBe('');
  expect(longestCommonSubstring('ABABC', 'BABCA'))
    .toBe('BABC');
  expect(longestCommonSubstring('BABCA', 'ABCBA'))
    .toBe('ABC');
  expect(longestCommonSubstring(
    'Algorithms and data structures implemented in JavaScript',
    'Here you may find Algorithms and data structures that are implemented in JavaScript'
  ))
    .toBe('Algorithms and data structures ');

  expect(longestCommonSubstring('𐌵𐌵**ABC', '𐌵𐌵--ABC'))
    .toBe('ABC');
  expect(longestCommonSubstring('𐌵𐌵**A', '𐌵𐌵--A'))
    .toBe('𐌵𐌵');
  expect(longestCommonSubstring('A买B时', '买B时GD'))
    .toBe('买B时');
  expect(longestCommonSubstring('After test买时 case', 'another_test买时'))
    .toBe('test买时');
});
