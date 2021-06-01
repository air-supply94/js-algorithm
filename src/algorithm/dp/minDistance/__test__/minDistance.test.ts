import { minDistance } from '../minDistance';

test('minDistance', () => {
  expect(minDistance('horse', 'ros'))
    .toBe(3);
  expect(minDistance('intention', 'execution'))
    .toBe(5);
  expect(minDistance('', 'ros'))
    .toBe(3);
});
