import { Difference } from '../difference';

test('difference', () => {
  const difference = new Difference([
    1,
    2,
    3,
    4,
  ]);

  expect(difference.toArray())
    .toEqual([
      1,
      2,
      3,
      4,
    ]);

  difference.add(0, 1, 2);
  expect(difference.toArray())
    .toEqual([
      3,
      4,
      3,
      4,
    ]);

  difference.add(0, 1, -2);
  expect(difference.toArray())
    .toEqual([
      1,
      2,
      3,
      4,
    ]);

  difference.add(0, 3, 1);
  expect(difference.toArray())
    .toEqual([
      2,
      3,
      4,
      5,
    ]);
});
