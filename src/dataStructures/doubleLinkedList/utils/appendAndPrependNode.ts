import type { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';

function emptyHandle<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): void {
  doubleLinkedList.tail = node;
  doubleLinkedList.head = node;
  node.next = null;
  node.previous = null;
}

export function appendNode<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    emptyHandle(doubleLinkedList, node);
  } else {
    doubleLinkedList.tail.next = node;
    node.previous = doubleLinkedList.tail;
    node.next = null;
    doubleLinkedList.tail = node;
  }

  doubleLinkedList.size++;
  return node;
}

export function prependNode<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (doubleLinkedList.isEmpty()) {
    emptyHandle(doubleLinkedList, node);
  } else {
    doubleLinkedList.head.previous = node;
    node.next = doubleLinkedList.head;
    node.previous = null;
    doubleLinkedList.head = node;
  }

  doubleLinkedList.size++;
  return node;
}
