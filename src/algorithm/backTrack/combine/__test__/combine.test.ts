import { combine } from '../combine';

test('combine', () => {
  expect(combine(3, 2))
    .toBe(3);

  expect(combine(4, 2))
    .toBe(6);

  expect(combine(5, 2))
    .toBe(10);

  expect(combine(5, 3))
    .toBe(10);
});
