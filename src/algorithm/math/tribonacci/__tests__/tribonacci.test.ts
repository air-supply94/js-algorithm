import { tribonacci } from '../tribonacci';

test('tribonacci', () => {
  expect(tribonacci(0))
    .toBe(0);
  expect(tribonacci(1))
    .toBe(1);
  expect(tribonacci(2))
    .toBe(1);
  expect(tribonacci(25))
    .toBe(1389537);
});
