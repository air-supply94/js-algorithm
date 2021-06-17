import { serializeLevelOrder } from '../../../dataStructures/tree/binarySearchTree/leetcode/serializeLevelOrder';
import { minDepth } from '../minDepth';

test('minDepth', () => {
  expect(minDepth(serializeLevelOrder([])))
    .toBe(0);

  expect(minDepth(serializeLevelOrder([
    1,
    2,
    null,
  ])))
    .toBe(2);

  expect(minDepth(serializeLevelOrder([
    1,
    null,
    2,
  ])))
    .toBe(2);

  expect(minDepth(serializeLevelOrder(
    [
      3,
      9,
      20,
      null,
      null,
      15,
      7,
    ]
  )))
    .toBe(2);

  expect(minDepth(serializeLevelOrder(
    [
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6,
    ]
  )))
    .toBe(5);
});
