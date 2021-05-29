import { knapsack01 } from '../knapsack01';

test('knapsack01', () => {
  expect(knapsack01(
    4,
    3,
    [
      2,
      1,
      3,
    ],
    [
      4,
      2,
      3,
    ]
  ))
    .toBe(6);
  expect(knapsack01(
    5,
    3,
    [
      1,
      2,
      3,
    ],
    [
      6,
      10,
      12,
    ]
  ))
    .toBe(22);
});
