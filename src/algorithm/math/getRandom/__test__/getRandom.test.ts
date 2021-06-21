import { DoubleLinkedList } from '../../../../dataStructures/doubleLinkedList';
import { getRandom } from '../getRandom';

test('getRandom', () => {
  const doubleLinkedList = new DoubleLinkedList<number>();
  expect(getRandom(doubleLinkedList.head))
    .toBeNull();

  doubleLinkedList.append(0);
  expect(getRandom(doubleLinkedList.head))
    .toBe(0);

  doubleLinkedList.append(1);
  expect([
    0,
    1,
  ].includes(getRandom(doubleLinkedList.head)))
    .toBeTruthy();

  doubleLinkedList.append(2);
  expect([
    0,
    1,
    2,
  ].includes(getRandom(doubleLinkedList.head)))
    .toBeTruthy();

  doubleLinkedList.append(3);
  expect([
    0,
    1,
    2,
    3,
  ].includes(getRandom(doubleLinkedList.head)))
    .toBeTruthy();
});
