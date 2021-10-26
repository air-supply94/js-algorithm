import type { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';

export function appendNode<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    doubleLinkedList.tail = node;
    doubleLinkedList.head = node;
    node.next = null;
    node.previous = null;

    doubleLinkedList.size++;
    return node;
  } else {
    doubleLinkedList.tail.next = node;
    node.previous = doubleLinkedList.tail;
    node.next = null;
    doubleLinkedList.tail = node;

    doubleLinkedList.size++;
    return node;
  }
}
