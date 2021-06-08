import { nextGreaterElement, nextGreaterElementCircle } from '../monotonicStack';

test('nextGreaterElement', () => {
  expect(nextGreaterElement(
    [
      4,
      1,
      2,
    ],
    [
      1,
      3,
      4,
      2,
    ]
  ))
    .toEqual([
      -1,
      3,
      -1,
    ]);

  expect(nextGreaterElement(
    [
      2,
      4,
    ],
    [
      1,
      2,
      3,
      4,
    ]
  ))
    .toEqual([
      3,
      -1,
    ]);
});

test('nextGreaterElementCircle', () => {
  expect(nextGreaterElementCircle([
    2,
    1,
    2,
    4,
    3,
  ]))
    .toEqual([
      4,
      2,
      4,
      -1,
      4,
    ]);

  expect(nextGreaterElementCircle([
    1,
    2,
    1,
  ]))
    .toEqual([
      2,
      -1,
      2,
    ]);
});
