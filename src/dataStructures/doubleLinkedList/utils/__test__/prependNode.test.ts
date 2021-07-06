import { DoubleLinkedList, DoubleLinkedListNode } from '../../doubleLinkedList';
import { prependNode } from '../prependNode';

test('doubleLinkedList prependNode', () => {
  const linkedList = new DoubleLinkedList<number>();
  const node1 = new DoubleLinkedListNode(1);
  const node2 = new DoubleLinkedListNode(2);
  const node3 = new DoubleLinkedListNode(3);

  prependNode(linkedList, node1);
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

  prependNode(linkedList, node2);
  expect(linkedList.head)
    .toBe(node2);
  expect(linkedList.tail)
    .toBe(node1);
  expect(linkedList.head.previous)
    .toBeNull();
  expect(linkedList.tail.next)
    .toBeNull();
  expect(linkedList.size)
    .toBe(2);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('2,1');

  prependNode(linkedList, node3);
  expect(linkedList.head)
    .toBe(node3);
  expect(linkedList.tail)
    .toBe(node1);
  expect(linkedList.head.previous)
    .toBeNull();
  expect(linkedList.tail.next)
    .toBeNull();
  expect(linkedList.size)
    .toBe(3);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('3,2,1');
});
