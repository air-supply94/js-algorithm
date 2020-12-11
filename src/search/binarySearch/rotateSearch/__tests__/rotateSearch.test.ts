import { rotateSearch } from '../index';

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
describe('rotateSearch', () => {
  test('should search number in rotate sort array', () => {
    expect(rotateSearch([], 1))
      .toBe(-1);
    expect(rotateSearch(array1, 3))
      .toBe(-1);
    expect(rotateSearch(array1, 5))
      .toBe(1);
    expect(rotateSearch(array1, 0))
      .toBe(4);
    expect(rotateSearch(array2, 3))
      .toBe(5);
    expect(rotateSearch(array2, 7))
      .toBe(1);
  });
});
