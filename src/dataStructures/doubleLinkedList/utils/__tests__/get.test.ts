import { DoubleLinkedList } from '../../doubleLinkedList';
import { get } from '../get';
import { expect, test } from 'vitest';

test('doubleLinkedList get', () => {
  const linkedList = new DoubleLinkedList();

  expect(get(0, linkedList.size, linkedList.head, linkedList.tail))
    .toBeNull();
  linkedList.fromArray([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
  ]);
  expect(get(3, linkedList.size, linkedList.head, linkedList.tail).value)
    .toBe(4);
  expect(get(-2, linkedList.size, linkedList.head, linkedList.tail).value)
    .toBe(10);
  expect(get(-12, linkedList.size, linkedList.head, linkedList.tail))
    .toBeNull();
  expect(get(12, linkedList.size, linkedList.head, linkedList.tail))
    .toBeNull();
});
