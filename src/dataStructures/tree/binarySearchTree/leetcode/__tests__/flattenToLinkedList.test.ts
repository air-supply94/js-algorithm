import { flattenToLinkedList } from '../flattenToLinkedList';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('flattenToLinkedList', () => {
  expect(flattenToLinkedList(serializeLevelOrder([])))
    .toBeNull();

  const root1 = flattenToLinkedList(serializeLevelOrder([
    1,
    2,
    5,
    3,
    4,
    null,
    6,
  ]));
  expect(root1.value)
    .toBe(1);
  expect(root1.right.value)
    .toBe(2);
  expect(root1.right.right.value)
    .toBe(3);
  expect(root1.right.right.right.value)
    .toBe(4);
  expect(root1.right.right.right.right.value)
    .toBe(5);
  expect(root1.right.right.right.right.right.value)
    .toBe(6);
});
