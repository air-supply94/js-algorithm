import { bstToGst } from '../bstToGst';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('bstToGst', () => {
  expect(bstToGst(null))
    .toBeNull();

  const root = bstToGst(serializeLevelOrder([
    4,
    1,
    6,
    0,
    2,
    5,
    7,
    null,
    null,
    null,
    3,
    null,
    null,
    null,
    8,
  ]));

  expect(root.value)
    .toBe(30);

  expect(root.left.value)
    .toBe(36);
  expect(root.right.value)
    .toBe(21);
  expect(root.left.left.value)
    .toBe(36);
  expect(root.left.right.value)
    .toBe(35);
  expect(root.left.right.right.value)
    .toBe(33);

  expect(root.right.value)
    .toBe(21);
  expect(root.right.left.value)
    .toBe(26);
  expect(root.right.right.value)
    .toBe(15);
  expect(root.right.right.right.value)
    .toBe(8);
});
