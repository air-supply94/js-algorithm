import type { interfaces } from '../../../types';

function emptyHandle<T = unknown>(doubleLinkedList: interfaces.DoubleLinkedList<T>, node: interfaces.DoubleLinkedListNode<T>): void {
  doubleLinkedList.tail = node;
  doubleLinkedList.head = node;
  node.next = null;
  node.previous = null;
}

export function appendNode<T = unknown>(doubleLinkedList: interfaces.DoubleLinkedList<T>, node: interfaces.DoubleLinkedListNode<T>): interfaces.DoubleLinkedListNode<T> {
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

export function prependNode<T = unknown>(doubleLinkedList: interfaces.DoubleLinkedList<T>, node: interfaces.DoubleLinkedListNode<T>): interfaces.DoubleLinkedListNode<T> {
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
