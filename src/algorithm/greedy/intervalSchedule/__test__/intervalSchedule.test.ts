import { intervalSchedule } from '../intervalSchedule';

test('intervalSchedule', () => {
  expect(intervalSchedule([]))
    .toBe(0);

  expect(intervalSchedule(
    [
      [
        1,
        2,
      ],
      [
        2,
        3,
      ],
      [
        3,
        4,
      ],
      [
        1,
        3,
      ],
    ]
  ))
    .toBe(3);

  expect(intervalSchedule(
    [
      [
        1,
        2,
      ],
      [
        1,
        2,
      ],
      [
        1,
        2,
      ],
    ]
  ))
    .toBe(1);

  expect(intervalSchedule(
    [
      [
        1,
        2,
      ],
      [
        2,
        3,
      ],
    ]
  ))
    .toBe(2);
});
