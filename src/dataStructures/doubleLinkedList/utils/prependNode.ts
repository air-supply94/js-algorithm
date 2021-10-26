import type { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';

export function prependNode<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    doubleLinkedList.tail = node;
    doubleLinkedList.head = node;
    node.next = null;
    node.previous = null;

    doubleLinkedList.size++;
    return node;
  } else {
    doubleLinkedList.head.previous = node;
    node.next = doubleLinkedList.head;
    node.previous = null;
    doubleLinkedList.head = node;

    doubleLinkedList.size++;
    return node;
  }
}
