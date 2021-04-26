import { serializePostOrder } from '../serializePostOrder';

test('serializePostOrder', () => {
  expect(serializePostOrder([]))
    .toBeNull();

  const root = serializePostOrder([
    null,
    null,
    4,
    null,
    null,
    5,
    2,
    null,
    null,
    6,
    null,
    null,
    7,
    3,
    1,
  ]);

  expect(root.value)
    .toBe(1);
  expect(root.left.value)
    .toBe(2);
  expect(root.right.value)
    .toBe(3);
  expect(root.left.left.value)
    .toBe(4);
  expect(root.left.right.value)
    .toBe(5);
  expect(root.right.left.value)
    .toBe(6);
  expect(root.right.right.value)
    .toBe(7);
});
