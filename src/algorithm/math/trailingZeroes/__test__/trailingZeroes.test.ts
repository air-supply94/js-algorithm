import { trailingZeroes } from '../trailingZeroes';

test('trailingZeroes', () => {
  expect(trailingZeroes(3))
    .toBe(0);

  expect(trailingZeroes(6))
    .toBe(1);

  expect(trailingZeroes(25))
    .toBe(6);

  expect(trailingZeroes(75))
    .toBe(18);

  expect(trailingZeroes(125))
    .toBe(31);
});
