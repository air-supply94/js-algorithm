import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../types';

export function mergeTwoLists<T = unknown>(l1: DoubleLinkedListInterface<T>, l2: DoubleLinkedListInterface<T>): DoubleLinkedListInterface<T> {
  const preHead: DoubleLinkedListNodeInterface<T> = new DoubleLinkedListNode<T>(null);
  let node1 = l1.head;
  let node2 = l2.head;
  let prev: DoubleLinkedListNodeInterface<T> = preHead;
  let head: DoubleLinkedListNodeInterface<T> | null = null;
  let tail: DoubleLinkedListNodeInterface<T> | null = null;

  while (node1 && node2) {
    if (node1.value < node2.value) {
      prev.setNext(node1);
      node1.setPrevious(prev);
      node1 = node1.next;
    } else {
      prev.setNext(node2);
      node2.setPrevious(prev);
      node2 = node2.next;
    }

    prev = prev.next;
  }

  prev.setNext(node1 ? node1 : node2);

  if (preHead.next) {
    head = preHead.next;
    head.setPrevious(null);
    while (prev && prev.next) {
      prev = prev.next;
    }
    tail = prev;
  }

  return l1.setHead(head)
    .setTail(tail)
    .setSize(l1.size + l2.size);
}
