import { CircularQueue } from '../circularQueue';

const circularQueue = new CircularQueue(3);
test('CircularQueue', () => {
  expect(circularQueue.isEmpty())
    .toBeTruthy();
  expect(circularQueue.rear())
    .toBeNull();
  expect(circularQueue.front())
    .toBeNull();
  expect(circularQueue.deQueue())
    .toBeFalsy();
  expect(circularQueue.enQueue(1))
    .toBeTruthy();
  expect(circularQueue.enQueue(2))
    .toBeTruthy();
  expect(circularQueue.enQueue(3))
    .toBeTruthy();
  expect(circularQueue.enQueue(4))
    .toBeFalsy();

  expect(circularQueue.front())
    .toBe(1);
  expect(circularQueue.rear())
    .toBe(3);
  expect(circularQueue.isFull())
    .toBeTruthy();

  expect(circularQueue.deQueue())
    .toBeTruthy();
  expect(circularQueue.enQueue(4))
    .toBeTruthy();

  expect(circularQueue.rear())
    .toBe(4);
});
