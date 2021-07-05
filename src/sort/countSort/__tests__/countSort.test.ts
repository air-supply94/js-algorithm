import { countSort } from '../index';

test('countSort', () => {
  const array = [
    101,
    109,
    107,
    103,
    108,
    102,
    103,
    110,
    107,
    103,
  ];

  expect(countSort(array))
    .toEqual([
      101,
      102,
      103,
      103,
      103,
      107,
      107,
      108,
      109,
      110,
    ]);

  expect(countSort([]))
    .toEqual([]);
});
