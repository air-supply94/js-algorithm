import { checkSubTree, pathSum } from '../checkSubTree';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('checkSubTree', () => {
  expect(checkSubTree(null, null))
    .toBeTruthy();

  expect(checkSubTree(
    serializeLevelOrder([
      1,
      2,
      3,
    ]),
    serializeLevelOrder([
      3,
      1,
    ])))
    .toBeFalsy();

  expect(checkSubTree(
    serializeLevelOrder([
      3,
      4,
      5,
      1,
      2,
    ]),
    serializeLevelOrder([
      4,
      1,
    ])))
    .toBeTruthy();
});

test('pathSum', () => {
  expect(pathSum(null, 0))
    .toBe(0);
  expect(pathSum(serializeLevelOrder([
    5,
    4,
    8,
    11,
    null,
    13,
    4,
    7,
    2,
    null,
    null,
    5,
    1,
  ]), 22))
    .toBe(3);
});
