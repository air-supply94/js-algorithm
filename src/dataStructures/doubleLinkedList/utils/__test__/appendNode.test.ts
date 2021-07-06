import { DoubleLinkedList, DoubleLinkedListNode } from '../../doubleLinkedList';
import { appendNode } from '../appendNode';

test('doubleLinkedList appendNode', () => {
  const linkedList = new DoubleLinkedList<number>();
  const node1 = new DoubleLinkedListNode(1);
  const node2 = new DoubleLinkedListNode(2);
  const node3 = new DoubleLinkedListNode(3);

  appendNode(linkedList, node1);
  expect(linkedList.head)
    .toBe(node1);
  expect(linkedList.tail)
    .toBe(node1);
  expect(linkedList.head.previous)
    .toBeNull();
  expect(linkedList.tail.next)
    .toBeNull();
  expect(linkedList.size)
    .toBe(1);

  appendNode(linkedList, node2);
  expect(linkedList.head)
    .toBe(node1);
  expect(linkedList.tail)
    .toBe(node2);
  expect(linkedList.head.previous)
    .toBeNull();
  expect(linkedList.tail.next)
    .toBeNull();
  expect(linkedList.size)
    .toBe(2);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('1,2');

  appendNode(linkedList, node3);
  expect(linkedList.head)
    .toBe(node1);
  expect(linkedList.tail)
    .toBe(node3);
  expect(linkedList.head.previous)
    .toBeNull();
  expect(linkedList.tail.next)
    .toBeNull();
  expect(linkedList.size)
    .toBe(3);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('1,2,3');
});
