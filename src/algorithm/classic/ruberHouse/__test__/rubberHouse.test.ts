import { rubberHouse } from '../rubberHouse';

describe('rubberHouse', () => {
  test('find the max numbers', () => {
    expect(rubberHouse([]))
      .toBe(0);
    expect(rubberHouse([1]))
      .toBe(1);
    expect(rubberHouse([
      1,
      3,
    ]))
      .toBe(3);
    expect(rubberHouse([
      1,
      2,
      3,
      1,
    ]))
      .toBe(4);
    expect(rubberHouse([
      2,
      7,
      9,
      3,
      1,
    ]))
      .toBe(12);
  });
});
