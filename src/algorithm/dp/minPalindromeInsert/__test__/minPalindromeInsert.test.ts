import { minPalindromeInsert } from '../minPalindromeInsert';

test('minPalindromeInsert', () => {
  expect(minPalindromeInsert(''))
    .toBe(0);
  expect(minPalindromeInsert('zzazz'))
    .toBe(0);
  expect(minPalindromeInsert('mbadm'))
    .toBe(2);
  expect(minPalindromeInsert('leetcode'))
    .toBe(5);
  expect(minPalindromeInsert('g'))
    .toBe(0);
  expect(minPalindromeInsert('no'))
    .toBe(1);
});
