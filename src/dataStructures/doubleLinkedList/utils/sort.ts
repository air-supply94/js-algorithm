import { Comparator } from '../../../utils/comparator';
import { DoubleLinkedListNodeInterface } from '../types';
import { mergeTwoLists } from './mergeTwoLists';

export function sort<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null, comparator: Comparator): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;
  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const middle = slow.next;
  middle.setPrevious(null);
  slow.setNext(null);

  return mergeTwoLists<T>(sort<T>(head, comparator), sort<T>(middle, comparator), comparator);
}
