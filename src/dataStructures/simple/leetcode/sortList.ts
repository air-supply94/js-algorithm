import { ListNode } from '../listNode';
import { mergeTwoLists } from './mergeTwoLists';

// https://leetcode-cn.com/problems/sort-list/
// 148
export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const middle = slow.next;

  // middle.previous = null;
  slow.next = null;

  return mergeTwoLists(sortList(head), sortList(middle));
}
