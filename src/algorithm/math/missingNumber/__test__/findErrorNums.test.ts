import { findErrorNums } from '../findErrorNums';

test('findErrorNums', () => {
  expect(findErrorNums([
    1,
    2,
    4,
    4,
    5,
    6,
  ]))
    .toEqual([
      4,
      3,
    ]);

  expect(findErrorNums([
    1,
    2,
    2,
    4,
  ]))
    .toEqual([
      2,
      3,
    ]);

  expect(findErrorNums([
    1,
    1,
  ]))
    .toEqual([
      1,
      2,
    ]);
});
