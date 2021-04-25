import { findDuplicateSubtree } from '../findDuplicateSubtree';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('findDuplicateSubtree', () => {
  expect(findDuplicateSubtree(null))
    .toEqual([]);

  const result = findDuplicateSubtree(serializeLevelOrder([
    1,
    2,
    3,
    4,
    null,
    2,
    4,
    null,
    null,
    4,
    null,
    null,
    null,
  ]));

  expect(result[0].value)
    .toBe(4);
  expect(result[1].value)
    .toBe(2);
  expect(result[1].left.value)
    .toBe(4);
});
