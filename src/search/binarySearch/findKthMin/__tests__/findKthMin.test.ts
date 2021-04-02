import { findKthMin } from '../index';

const arr1 = [
  1,
  2,
  3,
];

const arr2 = [
  3,
  4,
  5,
  6,
];
test('findKthMin', () => {
  expect(findKthMin(
    arr1,
    [],
    2))
    .toBe(2);

  expect(findKthMin(
    [],
    arr2,
    2))
    .toBe(4);

  expect(findKthMin(
    arr1,
    [
      0,
      2,
      4,
    ],
    3))
    .toBe(2);

  expect(findKthMin(
    arr1,
    arr2,
    4))
    .toBe(3);
  expect(findKthMin(
    arr2,
    arr1,
    4))
    .toBe(3);

  expect(findKthMin(
    arr2,
    arr1,
    7))
    .toBe(6);
  expect(findKthMin(
    arr2,
    arr1,
    8))
    .toBeUndefined();
  expect(findKthMin(
    arr1,
    arr2,
    7))
    .toBe(6);
  expect(findKthMin(
    arr1,
    arr2,
    8))
    .toBeUndefined();

  expect(findKthMin(
    [
      0,
      1,
      2,
    ],
    [
      3,
      4,
      5,
      7,
      8,
    ],
    3))
    .toBe(2);
});
