import type { ListNode } from '../listNode';

// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 19
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head;
  let fast = head;
  let count = n;
  while (count > 0) {
    fast = fast.next;
    count--;
  }

  if (!fast) {
    return head.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}
