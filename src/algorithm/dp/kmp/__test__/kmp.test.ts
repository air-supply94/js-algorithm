import { kmp, kmpDp } from '../kmp';

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

test('kmpDp', () => {
  expect(kmpDp('abcd', 'd'))
    .toBe(3);
  expect(kmpDp('', ''))
    .toBe(0);
  expect(kmpDp('abcdefgab', 'abcdex'))
    .toBe(-1);
  expect(kmpDp('ababababca', 'abababca'))
    .toBe(2);
  expect(kmpDp('aaaabcde', 'aaaaax'))
    .toBe(-1);
});
