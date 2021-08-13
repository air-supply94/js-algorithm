import { ListNode } from '../listNode';

// https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 142-2
export function detectCycle(startNode: ListNode): null | ListNode {
  let slow = startNode;
  let fast = startNode;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (!fast || !fast.next) {
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