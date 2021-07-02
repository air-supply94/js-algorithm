import { divingBoard } from '../divingBoard';

test('divingBoard', () => {
  expect(divingBoard(1, 1, 0))
    .toEqual([]);

  expect(divingBoard(1, 1, 2))
    .toEqual([2]);

  expect(divingBoard(1, 2, 3))
    .toEqual([
      3,
      4,
      5,
      6,
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
