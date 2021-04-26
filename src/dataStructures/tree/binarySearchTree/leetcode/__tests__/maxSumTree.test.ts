import { maxSumTree } from '../maxSumTree';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('maxSumTree', () => {
  expect(maxSumTree(null))
    .toBe(0);

  expect(maxSumTree(serializeLevelOrder([
    1,
    4,
    3,
    2,
    4,
    2,
    5,
    null,
    null,
    null,
    null,
    null,
    null,
    4,
    6,
  ])))
    .toBe(20);

  expect(maxSumTree(serializeLevelOrder([
    4,
    3,
    null,
    1,
    2,
  ])))
    .toBe(2);

  expect(maxSumTree(serializeLevelOrder([
    -4,
    -2,
    -5,
  ])))
    .toBe(0);

  expect(maxSumTree(serializeLevelOrder([
    2,
    1,
    3,
  ])))
    .toBe(6);

  expect(maxSumTree(serializeLevelOrder([
    5,
    4,
    8,
    3,
    null,
    6,
    3,
  ])))
    .toBe(7);
});
