import { maxProfitCountInfinityAndFee } from '../maxProfitCountInfinityAndFee';

test('maxProfitCountInfinityAndFee', () => {
  expect(maxProfitCountInfinityAndFee([], 1))
    .toBe(0);

  expect(maxProfitCountInfinityAndFee([
    1,
    3,
    2,
    8,
    4,
    9,
  ], 2))
    .toBe(8);
});
