import { checkSubTree } from '../checkSubTree';
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
