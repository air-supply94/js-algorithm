import { connectNodeNext } from '../connectNodeNext';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('connectNodeNext', () => {
  expect(connectNodeNext(serializeLevelOrder([])))
    .toBeNull();

  const root1: any = connectNodeNext(serializeLevelOrder([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ]));
  expect(root1.left._next.value)
    .toBe(3);
  expect(root1.left.left._next.value)
    .toBe(5);
  expect(root1.left.left._next._next.value)
    .toBe(6);
  expect(root1.left.left._next._next._next.value)
    .toBe(7);

  const root2: any = connectNodeNext(serializeLevelOrder([
    1,
    2,
    3,
    4,
    null,
    null,
    7,
  ]));
  expect(root2.left.left._next.value)
    .toBe(7);
});
