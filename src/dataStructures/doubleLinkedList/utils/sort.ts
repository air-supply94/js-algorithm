import { Comparator } from '../../../utils';
import { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';
import { mergeTwoLists } from './mergeTwoLists';

export function sort<T = unknown>(doubleLinkedList: DoubleLinkedList<T>): void {
  sortBase<T>(doubleLinkedList.head, doubleLinkedList.compare);

  let head = doubleLinkedList.head;
  let tail = doubleLinkedList.head;
  while (head && head.previous) {
    head = head.previous;
  }
  while (tail && tail.next) {
    tail = tail.next;
  }

  doubleLinkedList.head = head;
  doubleLinkedList.tail = tail;
}

function sortBase<T = unknown>(head: DoubleLinkedListNode<T> | null, comparator: Comparator): DoubleLinkedListNode<T> | null {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const middle = slow.next;
  middle.previous = null;
  slow.next = null;

  return mergeTwoLists<T>(sortBase<T>(head, comparator), sortBase<T>(middle, comparator), comparator);
}
