import { superEggDrop } from '../superEggDrop';

test('superEggDrop', () => {
  expect(superEggDrop(1, 2))
    .toBe(2);
  expect(superEggDrop(2, 6))
    .toBe(3);
  expect(superEggDrop(3, 14))
    .toBe(4);
  expect(superEggDrop(2, 100))
    .toBe(14);
});
