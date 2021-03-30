import { getUpMedian } from '../index';

test('getUpMedian', () => {
  expect(getUpMedian([
    1,
    2,
    3,
    4,
  ],
  [
    3,
    4,
    5,
    6,
  ]))
    .toBe(3);
  expect(getUpMedian([
    0,
    1,
    2,
  ],
  [
    3,
    4,
    5,
  ]))
    .toBe(2);
  expect(getUpMedian([
    3,
    4,
    5,
    6,
    7,
  ], [
    1,
    2,
    3,
    4,
    5,
  ]
  ))
    .toBe(4);
});
