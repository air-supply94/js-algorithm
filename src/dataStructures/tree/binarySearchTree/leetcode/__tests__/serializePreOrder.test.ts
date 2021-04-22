import { serializePreOrder } from '../serializePreOrder';

test('serializePreOrder', () => {
  expect(serializePreOrder([]))
    .toBeNull();
  expect(serializePreOrder([1]).value)
    .toBe(1);

  const root = serializePreOrder([
    2,
    1,
    null,
    null,
    4,
    3,
    null,
    null,
    5,
    null,
    null,
  ]);

  expect(root.left.value)
    .toBe(1);
  expect(root.right.value)
    .toBe(4);
  expect(root.toString())
    .toBe('1,2,3,4,5');
});
