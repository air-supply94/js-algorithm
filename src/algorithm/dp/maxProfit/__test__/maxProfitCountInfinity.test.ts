import { maxProfitCountInfinity } from '../maxProfitCountInfinity';

test('maxProfitCountInfinity', () => {
  expect(maxProfitCountInfinity([]))
    .toBe(0);

  expect(maxProfitCountInfinity([
    7,
    1,
    5,
    3,
    6,
    4,
  ]))
    .toBe(7);
  expect(maxProfitCountInfinity([
    1,
    2,
    3,
    4,
    5,
  ]))
    .toBe(4);
  expect(maxProfitCountInfinity([
    7,
    6,
    4,
    3,
    1,
  ]))
    .toBe(0);
});
