import { findFirstLarge } from '../index';

test('findFirstLarge', () => {
  expect(findFirstLarge([
    1,
    2,
    5,
    6,
    9,
  ], 4))
    .toBe(2);
  expect(findFirstLarge([
    0,
    1,
    2,
    2,
    2,
    3,
  ], 2))
    .toBe(5);
});
