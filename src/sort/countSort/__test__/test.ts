import { countSort } from '../index';

describe('countSort', () => {
  it('should sorted array', () => {
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
  });
});
