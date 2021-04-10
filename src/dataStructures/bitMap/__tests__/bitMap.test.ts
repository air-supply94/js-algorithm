import { BitMap } from '../bitMap';

describe('bitMap', () => {
  let bitMap: BitMap;
  const data = [
    0,
    6,
    88,
    7,
    73,
    34,
    10,
    99,
    22,
  ];

  beforeEach(() => {
    bitMap = new BitMap(4);
  });

  test('should contain number', () => {
    data.forEach((item) => {
      bitMap.insert(item);
    });

    data.forEach((item) => {
      expect(bitMap.contain(item))
        .toBeTruthy();
    });

    Array(100)
      .fill(0)
      .map((_, index) => index)
      .filter((item) => !data.includes(item))
      .forEach((item) => {
        expect(bitMap.contain(item))
          .toBeFalsy();
      });
  });
});
