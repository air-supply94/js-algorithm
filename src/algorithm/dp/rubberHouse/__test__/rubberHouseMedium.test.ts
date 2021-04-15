import { rubberHouseMedium } from '../rubberHouseMedium';

test('rubberHouseMedium', () => {
  expect(rubberHouseMedium([
    2,
    3,
    2,
  ]))
    .toBe(3);
  expect(rubberHouseMedium([
    1,
    2,
    3,
    1,
  ]))
    .toBe(4);
});
