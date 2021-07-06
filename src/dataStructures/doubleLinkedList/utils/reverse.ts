import { DoubleLinkedListNode } from '../doubleLinkedList';

export function reverseBase<T = unknown>(head: DoubleLinkedListNode<T> | null): DoubleLinkedListNode<T> | null {
  let current = head;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    current.previous = next;
    previous = current;
    current = next;
  }

  return previous;
}

export function reverseCount<T = unknown>(head: DoubleLinkedListNode<T> | null, n: number): DoubleLinkedListNode<T> | null {
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
    firstTail.next = null;
    secondHead.previous = null;

    const newHead = reverseBase(head);

    head.next = secondHead;
    secondHead.previous = head;
    return newHead;
  } else {
    return reverseBase(head);
  }
}

export function reverseBetween<T = unknown>(head: DoubleLinkedListNode<T> | null, m: number, n: number): DoubleLinkedListNode<T> | null {
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
    firstTail.next = null;
    secondHead.previous = null;

    const newSecondHead = reverseCount(secondHead, n - m + 1);
    firstTail.next = newSecondHead;
    newSecondHead.previous = firstTail;
    return head;
  } else {
    return head;
  }
}

export function reverseCountGroup<T = unknown>(head: DoubleLinkedListNode<T> | null, n: number): DoubleLinkedListNode<T> | null {
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
    firstTail.next = null;
    next.previous = null;

    reverseBase(head);
    const nextHead = reverseCountGroup(next, n);

    head.next = nextHead;
    nextHead.previous = head;
    return firstTail;
  } else {
    return reverseBase(head);
  }
}
