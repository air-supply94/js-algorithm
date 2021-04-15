import { rubberHouseEasy } from '../rubberHouseEasy';

test('rubberHouseEasy', () => {
  expect(rubberHouseEasy([]))
    .toBe(0);
  expect(rubberHouseEasy([1]))
    .toBe(1);
  expect(rubberHouseEasy([
    1,
    2,
  ]))
    .toBe(2);
  expect(rubberHouseEasy([
    1,
    2,
    3,
    1,
  ]))
    .toBe(4);
  expect(rubberHouseEasy([
    2,
    7,
    9,
    3,
    1,
  ]))
    .toBe(12);
});
