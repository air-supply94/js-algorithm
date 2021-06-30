import { isSubsequence } from '../isSubsequence';

test('isSubsequence', () => {
  expect(isSubsequence('abc', 'ahbgdc'))
    .toBeTruthy();

  expect(isSubsequence('axc', 'ahbgdc'))
    .toBeFalsy();
});
