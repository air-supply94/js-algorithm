import { isValid } from '../isValid';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('isValid', () => {
  expect(isValid(null))
    .toBeTruthy();

  expect(isValid(serializeLevelOrder([
    2,
    1,
    3,
  ])))
    .toBeTruthy();

  expect(isValid(serializeLevelOrder([
    2,
    1,
    3,
    null,
    null,
    4,
    null,
  ])))
    .toBeFalsy();

  expect(isValid(serializeLevelOrder([
    5,
    1,
    4,
    null,
    null,
    3,
    6,
  ])))
    .toBeFalsy();

  expect(isValid(serializeLevelOrder([
    10,
    5,
    15,
    null,
    null,
    6,
    20,
  ])))
    .toBeFalsy();
});
