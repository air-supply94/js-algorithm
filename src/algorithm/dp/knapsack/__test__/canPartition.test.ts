import { canPartition } from '../canPartition';

test('canPartition', () => {
  expect(canPartition([
    1,
    5,
    11,
    5,
  ]))
    .toBeTruthy();

  expect(canPartition([
    1,
    2,
    3,
    5,
  ]))
    .toBeFalsy();
});
