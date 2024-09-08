import type { ListNode } from './listNode';

// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 142-2
// top100
export function detectCycle(startNode: ListNode): ListNode | null {
  let slow = startNode;
  let fast = startNode;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (fast == null || fast.next == null) {
    return null;
  }

  let start = startNode;
  let end = slow;
  while (start !== end) {
    start = start.next;
    end = end.next;
  }

  return start;
}
