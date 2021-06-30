import { findFirstLarge } from '../findFirstLarge';

test('findFirstLarge', () => {
  expect(findFirstLarge([
    1,
    2,
    3,
    4,
    5,
  ], 4))
    .toBe(4);

  expect(findFirstLarge([
    1,
    3,
    5,
  ], 2))
    .toBe(1);

  expect(findFirstLarge([
    1,
    2,
    5,
    6,
    9,
  ], 10))
    .toBe(-1);

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
