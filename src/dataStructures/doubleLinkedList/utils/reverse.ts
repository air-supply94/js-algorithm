import { DoubleLinkedListNodeInterface } from '../types';

export function reverse<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null): void {
  let current = head;
  let previous = null;
  let next = null;
  while (current) {
    next = current.next;
    current.setNext(previous)
    .setPrevious(next);
    previous = current;
    current = next;
  }
}
