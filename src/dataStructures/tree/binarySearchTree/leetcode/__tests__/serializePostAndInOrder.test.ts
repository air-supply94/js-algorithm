import { serializePostAndInOrder } from '../serializePostAndInOrder';

test('serializePostAndInOrder', () => {
  expect(serializePostAndInOrder([], []))
    .toBeNull();
  expect(serializePostAndInOrder([1], [1]).value)
    .toBe(1);

  const node1 = serializePostAndInOrder([
    9,
    15,
    7,
    20,
    3,
  ], [
    9,
    3,
    15,
    20,
    7,
  ]);

  expect(node1.value)
    .toBe(3);
  expect(node1.left.value)
    .toBe(9);
  expect(node1.right.value)
    .toBe(20);
  expect(node1.right.left.value)
    .toBe(15);
  expect(node1.right.right.value)
    .toBe(7);
});
