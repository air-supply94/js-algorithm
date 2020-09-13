import { divingBoard } from '../index';

test('divingBoard', () => {
  expect(divingBoard(1, 1, 0))
    .toEqual([]);
  expect(divingBoard(1, 1, 2))
    .toEqual([
      1,
      1,
    ]);
  expect(divingBoard(1, 3, 5))
    .toEqual([
      5,
      7,
      9,
      11,
      13,
      15,
    ]);
});
