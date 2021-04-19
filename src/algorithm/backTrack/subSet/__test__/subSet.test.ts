import { subSet } from '../subSet';

test('subSet', () => {
  expect(subSet([1]))
    .toEqual([
      [],
      [1],
    ]);

  expect(subSet([
    1,
    2,
    3,
  ]))
    .toEqual([
      [],
      [1],
      [2],
      [
        1,
        2,
      ],
      [3],
      [
        1,
        3,
      ],
      [
        2,
        3,
      ],
      [
        1,
        2,
        3,
      ],
    ]);
});
