import { lowestCommonAncestor, lowestCommonAncestorBst } from '../lowestCommonAncestor';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('lowestCommonAncestor', () => {
  expect(lowestCommonAncestor(serializeLevelOrder([
    3,
    null,
    2,
    null,
    1,
  ]), 2, 1).value)
    .toBe(2);
  expect(lowestCommonAncestor(serializeLevelOrder([
    3,
    2,
    null,
    1,
  ]), 2, 1).value)
    .toBe(2);

  expect(lowestCommonAncestor(serializeLevelOrder([
    3,
    5,
    1,
    6,
    2,
    0,
    8,
    null,
    null,
    7,
    4,
  ]), 5, 1).value)
    .toBe(3);

  expect(lowestCommonAncestor(serializeLevelOrder([
    3,
    5,
    1,
    6,
    2,
    0,
    8,
    null,
    null,
    7,
    4,
  ]), 5, 4).value)
    .toBe(5);
});

test('lowestCommonAncestorBst', () => {
  expect(lowestCommonAncestorBst(null, 2, 3))
    .toBeNull();

  expect(lowestCommonAncestorBst(serializeLevelOrder([
    6,
    2,
    8,
    0,
    4,
    7,
    9,
    null,
    null,
    3,
    5,
  ]), 2, 8).value)
    .toBe(6);

  expect(lowestCommonAncestorBst(serializeLevelOrder([
    3,
    2,
    null,
    1,
  ]), 2, 3).value)
    .toBe(3);

  expect(lowestCommonAncestorBst(serializeLevelOrder([
    1,
    null,
    2,
    null,
    3,
  ]), 2, 3).value)
    .toBe(2);

  expect(lowestCommonAncestorBst(serializeLevelOrder([
    6,
    2,
    8,
    0,
    4,
    7,
    9,
    null,
    null,
    3,
    5,
  ]), 2, 4).value)
    .toBe(2);
});
