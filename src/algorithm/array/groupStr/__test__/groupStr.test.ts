import { groupStr } from '../groupStr';

test('groupStr', () => {
  expect(groupStr([
    'eat',
    'tea',
    'tan',
    'ate',
    'nat',
    'bat',
  ]))
    .toEqual([
      [
        'eat',
        'tea',
        'ate',
      ],
      [
        'tan',
        'nat',
      ],
      ['bat'],
    ]);
});
