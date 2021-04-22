import { invertTree } from '../invertTree';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('invertTree', () => {
  expect(invertTree(serializeLevelOrder([])))
    .toBeNull();

  const root = invertTree(serializeLevelOrder([
    4,
    2,
    7,
    1,
    3,
    6,
    9,
  ]));

  expect(root.value)
    .toBe(4);
  expect(root.left.value)
    .toBe(7);
  expect(root.right.value)
    .toBe(2);
  expect(root.left.left.value)
    .toBe(9);
  expect(root.left.right.value)
    .toBe(6);
  expect(root.right.left.value)
    .toBe(3);
  expect(root.right.right.value)
    .toBe(1);
});
