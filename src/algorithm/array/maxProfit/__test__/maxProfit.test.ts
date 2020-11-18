import { maxProfit } from '../maxProfit';

test('maxProfit', () => {
  expect(maxProfit([
    7,
    1,
    5,
    3,
    6,
    4,
  ]))
    .toBe(7);
  expect(maxProfit([
    7,
    6,
    4,
    3,
    1,
  ]))
    .toBe(0);
});
