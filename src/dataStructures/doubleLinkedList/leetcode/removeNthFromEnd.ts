import type { ListNode } from './listNode';

// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 19
// top100
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head;
  let fast = head;
  let count = n;
  while (fast && count > 0) {
    fast = fast.next;
    count--;
  }

  if (fast == null) {
    return head.next;
  }

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}
