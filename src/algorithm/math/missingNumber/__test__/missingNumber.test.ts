import { missingNumber } from '../missingNumber';

test('missingNumber', () => {
  expect(missingNumber([
    0,
    1,
    3,
    4,
  ]))
    .toBe(2);

  expect(missingNumber([
    0,
    2,
  ]))
    .toBe(1);
});
