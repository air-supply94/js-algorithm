import { maximumSubarray } from '../maximumSubarray';

test('maximumSubarray', () => {
  expect(maximumSubarray(
    [
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5,
      4,
    ]
  ))
    .toBe(6);

  expect(maximumSubarray([]))
    .toBe(0);
  expect(maximumSubarray([1]))
    .toBe(1);
  expect(maximumSubarray([-1]))
    .toBe(-1);
});

