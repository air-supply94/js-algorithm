import { minDistance } from '../minDistance';

test('the Minimum number of times for str1 become str2', () => {
  expect(minDistance('horse', 'ros'))
    .toBe(3);
  expect(minDistance('intention', 'execution'))
    .toBe(5);
  expect(minDistance('', 'ros'))
    .toBe(3);
});
