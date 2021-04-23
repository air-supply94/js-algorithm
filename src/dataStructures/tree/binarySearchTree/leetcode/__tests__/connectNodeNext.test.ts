import { constructMaximumTree } from '../constructMaximumTree';

test('constructMaximumTree', () => {
  expect(constructMaximumTree([]))
    .toBeNull();

  const root = constructMaximumTree([
    3,
    2,
    1,
    6,
    0,
    5,
  ]);

  expect(root.value)
    .toBe(6);
  expect(root.left.value)
    .toBe(3);
  expect(root.right.value)
    .toBe(5);
  expect(root.left.right.value)
    .toBe(2);
  expect(root.right.left.value)
    .toBe(0);
  expect(root.left.right.right.value)
    .toBe(1);
});
