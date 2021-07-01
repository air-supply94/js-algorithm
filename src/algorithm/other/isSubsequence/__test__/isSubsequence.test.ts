import { isSubsequence, isSubsequenceBs } from '../isSubsequence';

test('isSubsequence', () => {
  expect(isSubsequence('aabc', 'aahbgdc'))
    .toBeTruthy();

  expect(isSubsequence('axc', 'ahbgdc'))
    .toBeFalsy();
});

test('isSubsequenceBs', () => {
  expect(isSubsequenceBs('aabc', 'aahbgdc'))
    .toBeTruthy();

  expect(isSubsequenceBs('axc', 'ahbgdc'))
    .toBeFalsy();

  expect(isSubsequenceBs('aaxc', 'ahbgdc'))
    .toBeFalsy();
});
