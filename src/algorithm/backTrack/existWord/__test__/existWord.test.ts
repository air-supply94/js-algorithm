import { existWord } from '../existWord';

test('existWord', () => {
  const str = [
    [
      'A',
      'B',
      'C',
      'E',
    ],
    [
      'S',
      'F',
      'C',
      'S',
    ],
    [
      'A',
      'D',
      'E',
      'E',
    ],
  ];
  expect(existWord(str, 'ABCCED'))
    .toBeTruthy();
  expect(existWord(str, 'SEE'))
    .toBeTruthy();
  expect(existWord(str, 'ABCB'))
    .toBeFalsy();
});
