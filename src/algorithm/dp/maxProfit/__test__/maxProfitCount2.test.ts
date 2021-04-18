import { maxProfitCount2 } from '../maxProfitCount2';

test('maxProfitCount2', () => {
  expect(maxProfitCount2([]))
    .toBe(0);

  expect(maxProfitCount2([1]))
    .toBe(0);

  expect(maxProfitCount2([
    3,
    3,
    5,
    0,
    0,
    3,
    1,
    4,
  ]))
    .toBe(6);

  expect(maxProfitCount2([
    1,
    2,
    3,
    4,
    5,
  ]))
    .toBe(4);
  expect(maxProfitCount2([
    7,
    6,
    4,
    3,
    1,
  ]))
    .toBe(0);
});
