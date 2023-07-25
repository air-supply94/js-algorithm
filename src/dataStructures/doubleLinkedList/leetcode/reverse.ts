import type { ListNode } from './listNode';

// https://leetcode-cn.com/problems/reverse-linked-list
// 206
export function reverseList(head: ListNode): ListNode | null {
  let previousNode = null;
  let currentNode = head;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

function reverseCount(head: ListNode | null, n: number): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }

  let firstTail = head;
  let targetN = n;
  while (firstTail.next && targetN > 1) {
    firstTail = firstTail.next;
    targetN--;
  }

  const secondHead = firstTail.next;
  if (secondHead) {
    firstTail.next = null;

    reverseList(head);

    head.next = secondHead;
    return firstTail;
  } else {
    return reverseList(head);
  }
}

// https://leetcode-cn.com/problems/reverse-linked-list-ii/
// 92
export function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }

  if (m === 1) {
    return reverseCount(head, n);
  }

  let firstTail = head;
  let targetM = m - 1;
  while (firstTail.next && targetM > 1) {
    firstTail = firstTail.next;
    targetM--;
  }
  const secondHead = firstTail.next;
  if (secondHead) {
    firstTail.next = reverseCount(secondHead, n - m + 1);
  }

  return head;
}

// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
// 25
export function reverseKGroup(head: ListNode | null, n: number): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }

  let targetN = 1;
  let firstTail = head;
  while (firstTail.next && targetN < n) {
    firstTail = firstTail.next;
    targetN++;
  }

  if (targetN !== n) {
    return head;
  }

  const secondHead = firstTail.next;
  if (secondHead) {
    firstTail.next = null;
    reverseList(head);
    head.next = reverseKGroup(secondHead, n);
    return firstTail;
  } else {
    return reverseList(head);
  }
}

