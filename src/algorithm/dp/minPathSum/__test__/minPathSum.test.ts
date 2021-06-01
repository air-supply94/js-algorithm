import { minPathSum } from '../minPathSum';

test('minPathSum', () => {
  expect(minPathSum(
    [
      [
        1,
        3,
        1,
      ],
      [
        1,
        5,
        1,
      ],
      [
        4,
        2,
        1,
      ],
    ]
  ))
    .toBe(7);

  expect(minPathSum(
    [
      [
        1,
        2,
        3,
      ],
      [
        4,
        5,
        6,
      ],
    ]
  ))
    .toBe(12);
});
