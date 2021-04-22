import { isSameMetric } from '../isSameMetric';
import { serializeLevelOrder } from '../serializeLevelOrder';

test('isSameMetric', () => {
  expect(isSameMetric(serializeLevelOrder([])))
    .toBeTruthy();
  expect(isSameMetric(serializeLevelOrder([
    1,
    2,
    null,
  ])))
    .toBeFalsy();
  expect(isSameMetric(serializeLevelOrder([
    1,
    2,
    3,
  ])))
    .toBeFalsy();
  expect(isSameMetric(serializeLevelOrder([
    1,
    2,
    2,
    3,
    4,
    4,
    3,
  ])))
    .toBeTruthy();
  expect(isSameMetric(serializeLevelOrder([
    1,
    2,
    2,
    null,
    3,
    null,
    3,
  ])))
    .toBeFalsy();
});
