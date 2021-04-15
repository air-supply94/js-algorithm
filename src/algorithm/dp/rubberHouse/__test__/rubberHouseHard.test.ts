import { rubberHouseHard } from '../rubberHouseHard';

test('rubberHouseHard', () => {
  expect(rubberHouseHard([]))
    .toBe(0);
  expect(rubberHouseHard([
    3,
    2,
    3,
    null,
    3,
    null,
    1,
  ]))
    .toBe(7);
  expect(rubberHouseHard([
    3,
    4,
    5,
    1,
    3,
    null,
    1,
  ]))
    .toBe(9);
});
