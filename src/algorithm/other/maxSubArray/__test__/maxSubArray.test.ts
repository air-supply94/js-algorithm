import { maxSubArray } from '../maxSubArray';

describe('maxSubArray', () => {
  test('the max subArray', () => {
    expect(maxSubArray([]))
      .toBe(0);
    expect(maxSubArray([2]))
      .toBe(2);
    expect(maxSubArray([
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5,
      4,
    ]))
      .toBe(6);
  });
});
