import { DoubleLinkedListNodeInterface } from '../types';

export function reverse<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null): DoubleLinkedListNodeInterface<T> | null {
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

  return previous;
}

/*
export function reverse<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  } else {
    const newHead = reverse<T>(head.next);
    newHead.setPrevious(null);
    head.setPrevious(head.next);
    head.next.setNext(head);
    head.setNext(null);
    return newHead;
  }
}
*/
