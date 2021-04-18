import { maxProfitCountAny } from '../maxProfitCountAny';

test('maxProfitCountAny', () => {
  expect(maxProfitCountAny([], 1))
    .toBe(0);

  expect(maxProfitCountAny([1], 1))
    .toBe(0);

  expect(maxProfitCountAny([
    2,
    4,
    1,
  ], 2))
    .toBe(2);

  expect(maxProfitCountAny([
    3,
    2,
    6,
    5,
    0,
    3,
  ], 2))
    .toBe(7);

  expect(maxProfitCountAny([
    3,
    3,
    5,
    0,
    0,
    3,
    1,
    4,
  ], 2))
    .toBe(6);

  expect(maxProfitCountAny([
    1,
    2,
    3,
    4,
    5,
  ], 2))
    .toBe(4);
  expect(maxProfitCountAny([
    7,
    6,
    4,
    3,
    1,
  ], 2))
    .toBe(0);
});
