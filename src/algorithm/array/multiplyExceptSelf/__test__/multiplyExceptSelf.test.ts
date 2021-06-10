import { multiplyExceptSelf } from '../multiplyExceptSelf';

test('multiplyExceptSelf', () => {
  expect(multiplyExceptSelf([
    1,
    2,
    3,
    4,
  ]))
    .toEqual([
      24,
      12,
      8,
      6,
    ]);

  expect(multiplyExceptSelf([
    1,
    2,
    0,
    3,
    4,
  ]))
    .toEqual([
      0,
      0,
      24,
      0,
      0,
    ]);
});
