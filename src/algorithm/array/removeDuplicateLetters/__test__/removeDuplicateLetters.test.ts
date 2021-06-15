import { removeDuplicateLetters } from '../removeDuplicateLetters';

test('removeDuplicateLetters', () => {
  expect(removeDuplicateLetters('abcd'))
    .toBe('abcd');

  expect(removeDuplicateLetters(''))
    .toBe('');

  expect(removeDuplicateLetters('bcabc'))
    .toBe('abc');

  expect(removeDuplicateLetters('cbacdcbc'))
    .toBe('acdb');
});
