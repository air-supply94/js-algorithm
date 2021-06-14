import { minWindow } from '../minWindow';

test('minWindow', () => {
  expect(minWindow('ADOBECODEBANC', 'ABC'))
    .toBe('BANC');

  expect(minWindow('a', 'a'))
    .toBe('a');

  expect(minWindow('a', 'b'))
    .toBe('');
});
