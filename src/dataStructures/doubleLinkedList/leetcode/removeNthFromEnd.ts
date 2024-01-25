import type { ListNode } from './listNode';

// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
// 19
// top100
// 剑指offer 类似
// https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9?tpId=13&tqId=1377477&ru=/exam/oj/ta&qru=/ta/coding-interviews/question-ranking&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D1%26tpId%3D13%26type%3D13
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

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
}
