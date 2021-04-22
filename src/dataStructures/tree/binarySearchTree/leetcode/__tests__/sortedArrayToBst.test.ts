import { sortedArrayToBst } from '../sortedArrayToBst';

test('sortedArrayToBst', () => {
  expect(sortedArrayToBst([]))
    .toBeNull();

  const node = sortedArrayToBst([
    1,
    2,
    3,
    4,
    5,
  ]);
  expect(node.value)
    .toBe(3);
  expect(node.left.value)
    .toBe(1);
  expect(node.right.value)
    .toBe(4);
  expect(node.toString())
    .toBe('1,2,3,4,5');
});
