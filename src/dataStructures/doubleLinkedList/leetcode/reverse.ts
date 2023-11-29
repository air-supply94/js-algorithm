import type { ListNode } from './listNode';

// https://leetcode-cn.com/problems/reverse-linked-list
// 206
// top100
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

// https://leetcode.cn/problems/swap-nodes-in-pairs/?envType=study-plan-v2&envId=top-100-liked
// 24
// top100
export function swapPairs(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }

  const newHead = head.next;
  const nextHead = newHead.next;
  newHead.next = head;
  head.next = swapPairs(nextHead);
  return newHead;
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
// top100
export function reverseKGroup(head: ListNode | null, n: number): ListNode | null {
  if (head == null || head.next == null || n === 1) {
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

