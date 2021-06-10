import { shipWithinDays } from '../index';

test('shipWithinDays', () => {
  expect(shipWithinDays(
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ],
    5
  ))
    .toBe(15);

  expect(shipWithinDays(
    [
      3,
      2,
      2,
      4,
      1,
      4,
    ],
    3
  ))
    .toBe(6);

  expect(shipWithinDays(
    [
      1,
      2,
      3,
      1,
      1,
    ],
    4
  ))
    .toBe(3);

  expect(shipWithinDays(
    [
      7,
      2,
      5,
      10,
      8,
    ],
    2
  ))
    .toBe(18);

  expect(shipWithinDays(
    [
      1,
      2,
      3,
      4,
      5,
    ],
    2
  ))
    .toBe(9);

  expect(shipWithinDays(
    [
      1,
      4,
      4,
    ],
    3
  ))
    .toBe(4);
});
