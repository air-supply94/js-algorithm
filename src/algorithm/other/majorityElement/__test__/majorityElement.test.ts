import { majorityElement } from '../majorityElement';

test('majorityElement', () => {
  expect(majorityElement([
    2,
    3,
    2,
  ]))
    .toBe(2);

  expect(majorityElement([
    2,
    2,
    1,
    1,
    1,
    2,
    2,
  ]))
    .toBe(2);
});
