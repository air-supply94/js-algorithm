import type { ListNode } from '../listNode';

// https://leetcode-cn.com/problems/reverse-linked-list
// 206
export function reverseList(head: ListNode): ListNode | null {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function reverseCount(head: ListNode | null, n: number): ListNode | null {
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

    const newHead = reverseList(head);

    head.next = secondHead;
    return newHead;
  } else {
    return reverseList(head);
  }
}

// https://leetcode-cn.com/problems/reverse-linked-list-ii/
// 92
export function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
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
    firstTail.next = reverseCount(secondHead, n - m + 1);
    return head;
  } else {
    return head;
  }
}

// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
// 25
export function reverseKGroup(head: ListNode | null, n: number): ListNode | null {
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

    reverseList(head);
    head.next = reverseKGroup(next, n);
    return firstTail;
  } else {
    return reverseList(head);
  }
}

