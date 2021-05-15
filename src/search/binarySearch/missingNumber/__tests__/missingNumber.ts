import { missingNumber } from '../index';

test('missingNumber', () => {
  expect(missingNumber([]))
    .toBe(0);

  expect(missingNumber([1]))
    .toBe(0);

  expect(missingNumber([
    0,
    1,
    3,
  ]))
    .toBe(2);

  expect(missingNumber([
    1,
    2,
    3,
  ]))
    .toBe(0);

  expect(missingNumber([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    9,
  ]))
    .toBe(8);
});
