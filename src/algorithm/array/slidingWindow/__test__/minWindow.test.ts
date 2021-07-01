import { minWindow } from '../minWindow';

test('minWindow', () => {
  expect(minWindow('aa', 'aa'))
    .toBe('aa');

  expect(minWindow('ADOBECODEBANC', 'ABC'))
    .toBe('BANC');

  expect(minWindow('a', 'a'))
    .toBe('a');

  expect(minWindow('a', 'b'))
    .toBe('');
});
