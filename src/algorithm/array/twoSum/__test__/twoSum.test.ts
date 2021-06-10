import { TwoSum, twoSum } from '../twoSum';

test('twoSum', () => {
  expect(twoSum(
    [
      2,
      7,
      11,
      15,
    ],
    9
  ))
    .toEqual([
      0,
      1,
    ]);

  expect(twoSum(
    [
      2,
      3,
      4,
    ],
    6
  ))
    .toEqual([
      0,
      2,
    ]);

  expect(twoSum(
    [
      -1,
      0,
    ],
    -1
  ))
    .toEqual([
      0,
      1,
    ]);

  expect(twoSum(
    [
      0,
      1,
      2,
      3,
      4,
    ],
    8
  ))
    .toEqual([
      -1,
      -1,
    ]);
});

test('TwoSum', () => {
  const twoSumInstance = new TwoSum();
  twoSumInstance.add(3);
  twoSumInstance.add(3);
  twoSumInstance.add(2);
  twoSumInstance.add(5);

  expect(twoSumInstance.find(6))
    .toBeTruthy();
  expect(twoSumInstance.find(7))
    .toBeTruthy();
  expect(twoSumInstance.find(8))
    .toBeTruthy();
  expect(twoSumInstance.find(9))
    .toBeFalsy();
});
