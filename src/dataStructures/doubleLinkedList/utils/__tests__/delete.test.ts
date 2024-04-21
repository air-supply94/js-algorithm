import { DoubleLinkedList } from '../../doubleLinkedList';
import { deleteIndex, deleteNode, deleteValueBase } from '../delete';
import { expect, test } from 'vitest';

test('doubleLinkedList deleteNode', () => {
  const linkedList = new DoubleLinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);

  const node1 = deleteNode(linkedList, linkedList.head.next);
  expect(node1.next).toBeNull();
  expect(node1.previous).toBeNull();
  expect(node1.value).toBe(2);
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.tail.value).toBe(4);
  expect(linkedList.size).toBe(3);

  expect(deleteNode(linkedList, linkedList.head).value).toBe(1);
  expect(linkedList.head.value).toBe(3);
  expect(linkedList.tail.value).toBe(4);
  expect(linkedList.size).toBe(2);

  expect(deleteNode(linkedList, linkedList.tail).value).toBe(4);
  expect(linkedList.head.value).toBe(3);
  expect(linkedList.tail.value).toBe(3);
  expect(linkedList.size).toBe(1);
});

test('doubleLinkedList deleteValueBase', () => {
  const linkedList = new DoubleLinkedList();

  expect(deleteValueBase(linkedList, 0, 4)).toBeNull();
  linkedList.append(0);
  linkedList.append(1);
  linkedList.append(1);
  linkedList.append(2);
  expect(deleteValueBase(linkedList, 1, 1).value).toBe(1);
  linkedList.clear();

  linkedList.append(1);
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(3);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);

  expect(linkedList.size).toBe(8);
  expect(linkedList.head.value).toBe(1);
  expect(linkedList.tail.value).toBe(5);

  const deletedNode = deleteValueBase(linkedList, Infinity, 3);
  expect(linkedList.size).toBe(5);
  expect(deletedNode.value).toBe(3);
  expect(
    linkedList
      .toArray()
      .map((item) => item.value)
      .join(','),
  ).toBe('1,1,2,4,5');
  expect(linkedList.tail.previous.previous.value).toBe(2);

  deleteValueBase(linkedList, Infinity, 3);
  expect(linkedList.size).toBe(5);
  expect(
    linkedList
      .toArray()
      .map((item) => item.value)
      .join(','),
  ).toBe('1,1,2,4,5');

  deleteValueBase(linkedList, Infinity, 1);
  expect(linkedList.size).toBe(3);
  expect(
    linkedList
      .toArray()
      .map((item) => item.value)
      .join(','),
  ).toBe('2,4,5');

  expect(linkedList.head.value).toBe(2);
  expect(linkedList.head.next.next).toBe(linkedList.tail);
  expect(linkedList.tail.previous.previous).toBe(linkedList.head);
  expect(linkedList.tail.value).toBe(5);

  deleteValueBase(linkedList, Infinity, 5);
  expect(linkedList.size).toBe(2);

  expect(linkedList.head.value).toBe(2);
  expect(linkedList.tail.value).toBe(4);

  deleteValueBase(linkedList, Infinity, 4);
  expect(linkedList.size).toBe(1);

  expect(linkedList.head.value).toBe(2);
  expect(linkedList.tail.value).toBe(2);
  expect(linkedList.head).toBe(linkedList.tail);

  deleteValueBase(linkedList, Infinity, 2);
  expect(linkedList.size).toBe(0);
});

test('doubleLinkedList deleteValueBase head and tail 1', () => {
  const linkedList = new DoubleLinkedList();
  linkedList.append(1);
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(1);
  linkedList.append(1);

  expect(linkedList.size).toBe(5);
  expect(
    linkedList
      .toArray()
      .map((item) => item.value)
      .join(','),
  ).toBe('1,1,2,1,1');
  deleteValueBase(linkedList, Infinity, 1);
  expect(linkedList.size).toBe(1);
  expect(linkedList.head.next).toBeNull();
  expect(linkedList.head.value).toBe(2);
  expect(linkedList.head.previous).toBeNull();
});

test('doubleLinkedList deleteValueBase head and tail 2', () => {
  const linkedList = new DoubleLinkedList();
  linkedList.append(1);
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(1);
  linkedList.append(1);
  linkedList.append(3);

  expect(linkedList.size).toBe(6);
  expect(
    linkedList
      .toArray()
      .map((item) => item.value)
      .join(','),
  ).toBe('1,1,2,1,1,3');
  deleteValueBase(linkedList, Infinity, 1);
  expect(linkedList.size).toBe(2);
  expect(linkedList.head.next.value).toBe(3);
  expect(linkedList.head.value).toBe(2);
  expect(linkedList.head.previous).toBeNull();
  expect(linkedList.tail.previous.value).toBe(2);
  expect(linkedList.tail.value).toBe(3);
  expect(linkedList.tail.next).toBeNull();
});

test('doubleLinkedList deleteIndex', () => {
  const linkedList = new DoubleLinkedList();
  expect(deleteIndex(linkedList, 0)).toBeNull();
  expect(deleteIndex(linkedList, -10)).toBeNull();

  linkedList.fromArray([1, 2, 3]);
  expect(deleteIndex(linkedList, 10)).toBeNull();
  expect(deleteIndex(linkedList, -2).value).toBe(2);
  expect(linkedList.size).toBe(2);
  expect(linkedList.head.next.value).toBe(3);
  expect(linkedList.tail.previous.value).toBe(1);
  expect(deleteIndex(linkedList, 1).value).toBe(3);
  expect(deleteIndex(linkedList, 0).value).toBe(1);
});
