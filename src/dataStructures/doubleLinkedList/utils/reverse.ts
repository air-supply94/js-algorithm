import { DoubleLinkedListNodeInterface } from '../types';

export function reverseBase<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null): DoubleLinkedListNodeInterface<T> | null {
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

export function reverseCount<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null, n: number): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  }

  let firstTail = head;
  let count = n;
  while (firstTail.next && count > 1) {
    firstTail = firstTail.next;
    count--;
  }

  if (firstTail.next) {
    const secondHead = firstTail.next;
    firstTail.setNext(null);
    secondHead.setPrevious(null);

    const newHead = reverseBase(head);

    head.setNext(secondHead);
    secondHead.setPrevious(head);
    return newHead;
  } else {
    return reverseBase(head);
  }
}

export function reverseBetween<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null, m: number, n: number): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  }

  if (m === 1) {
    return reverseCount(head, n);
  }

  let firstTail = head;
  let count = m - 1;
  while (firstTail.next && count > 1) {
    firstTail = firstTail.next;
    count--;
  }

  if (firstTail.next) {
    const secondHead = firstTail.next;
    firstTail.setNext(null);
    secondHead.setPrevious(null);

    const newSecondHead = reverseCount(secondHead, n - m + 1);
    firstTail.setNext(newSecondHead);
    newSecondHead.setPrevious(firstTail);
    return head;
  } else {
    return head;
  }
}

export function reverseCountGroup<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null, n: number): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  }

  let count = n;
  let firstTail = head;
  while (firstTail.next && count > 1) {
    firstTail = firstTail.next;
    count--;
  }

  if (count !== 1) {
    return head;
  }

  if (firstTail.next) {
    const next = firstTail.next;
    firstTail.setNext(null);
    next.setPrevious(null);

    reverseBase(head);
    const nextHead = reverseCountGroup(next, n);

    head.setNext(nextHead);
    nextHead.setPrevious(head);
    return firstTail;
  } else {
    return reverseBase(head);
  }
}
