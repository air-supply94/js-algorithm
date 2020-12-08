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

/*
export function reverseBase<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null): DoubleLinkedListNodeInterface<T> | null {
  if (!head || !head.next) {
    return head;
  } else {
    const newHead = reverseBase<T>(head.next);
    newHead.setPrevious(null);
    head.setPrevious(head.next);
    head.next.setNext(head);
    head.setNext(null);
    return newHead;
  }
}
*/

export function reverse<T = unknown>(head: DoubleLinkedListNodeInterface<T> | null, m: number, n: number): DoubleLinkedListNodeInterface<T> | null {
  let secondHead = head;
  let i = m;
  let j = n;

  while (i > 1 && secondHead) {
    secondHead = secondHead.next;
    i--;
    j--;
  }

  if (secondHead) {
    const firstTail = secondHead.previous;
    if (firstTail) {
      firstTail.setNext(null);
    }
    secondHead.setPrevious(null);

    let secondTail = secondHead;
    while (j > 1 && secondTail && secondTail.next) {
      secondTail = secondTail.next;
      j--;
    }

    const thirdHead = secondTail.next;
    if (thirdHead) {
      thirdHead.previous.setNext(null);
      thirdHead.setPrevious(null);
    }

    reverseBase<T>(secondHead);

    if (firstTail) {
      firstTail.setNext(secondTail);
    }

    secondHead.setNext(thirdHead);
    secondTail.setPrevious(firstTail);

    if (thirdHead) {
      thirdHead.setPrevious(secondHead);
    }

    return firstTail ? firstTail : secondTail;
  } else {
    return null;
  }
}
