import { maxProfitCount1 } from '../maxProfitCount1';

test('maxProfitCount1', () => {
  expect(maxProfitCount1([]))
    .toBe(0);

  expect(maxProfitCount1([
    7,
    1,
    5,
    3,
    6,
    4,
  ]))
    .toBe(5);
  expect(maxProfitCount1([
    7,
    6,
    4,
    3,
    1,
  ]))
    .toBe(0);
});
