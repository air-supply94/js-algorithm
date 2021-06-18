import { openLock } from '../openLock';

test('openLock', () => {
  expect(openLock(
    [
      '0201',
      '0101',
      '0102',
      '1212',
      '2002',
    ],
    '0202'
  ))
    .toBe(6);

  expect(openLock(
    ['8888'],
    '0009'
  ))
    .toBe(1);

  expect(openLock(
    [
      '8887',
      '8889',
      '8878',
      '8898',
      '8788',
      '8988',
      '7888',
      '9888',
    ],
    '8888'
  ))
    .toBe(-1);

  expect(openLock(
    ['0000'],
    '8888'
  ))
    .toBe(-1);

  expect(openLock(
    [],
    '0000'
  ))
    .toBe(0);
});
