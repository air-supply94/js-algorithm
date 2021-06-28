import { checkInclusion } from '../checkInclusion';

test('checkInclusion', () => {
  expect(checkInclusion('eidbaooo', 'abo'))
    .toBeTruthy();

  expect(checkInclusion('eidbaooo', 'io'))
    .toBeFalsy();

  expect(checkInclusion('eidbaooo', 'ba'))
    .toBeTruthy();

  expect(checkInclusion('eicidbaooo', 'id'))
    .toBeTruthy();
});
