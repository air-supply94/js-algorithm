import { rotateSearchElement, rotateSearchMin } from '../index';

const array1 = [
  4,
  5,
  6,
  7,
  0,
  1,
  2,
];

const array2 = [
  6,
  7,
  0,
  1,
  2,
  3,
  4,
  5,
];

test('rotateSearchElement', () => {
  expect(rotateSearchElement([], 1))
    .toBe(-1);
  expect(rotateSearchElement(array1, 3))
    .toBe(-1);
  expect(rotateSearchElement(array1, 5))
    .toBe(1);
  expect(rotateSearchElement(array1, 0))
    .toBe(4);
  expect(rotateSearchElement(array2, 3))
    .toBe(5);
  expect(rotateSearchElement(array2, 7))
    .toBe(1);
});

test('rotateSearchMin', () => {
  expect(rotateSearchMin(array1))
    .toBe(0);

  expect(rotateSearchMin(array2))
    .toBe(0);
});
