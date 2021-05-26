import { kmp } from '../kmp';

test('kmp', () => {
  expect(kmp('abcd', 'd'))
    .toBe(3);
  expect(kmp('', ''))
    .toBe(0);
  expect(kmp('abcdefgab', 'abcdex'))
    .toBe(-1);
  expect(kmp('ababababca', 'abababca'))
    .toBe(2);
  expect(kmp('aaaabcde', 'aaaaax'))
    .toBe(-1);
});
