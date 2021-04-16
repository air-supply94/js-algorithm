import { maxProfitCountInfinityAndCoolDown } from '../maxProfitCountInfinityAndCoolDown';

test('maxProfitCountInfinityAndCoolDown', () => {
  expect(maxProfitCountInfinityAndCoolDown([]))
    .toBe(0);

  expect(maxProfitCountInfinityAndCoolDown([
    1,
    2,
    3,
    0,
    2,
  ]))
    .toBe(3);
});
