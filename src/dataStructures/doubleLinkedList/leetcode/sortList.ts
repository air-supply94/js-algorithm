import { getHalfNode } from './isPalindrome';
import type { ListNode } from './listNode';
import { mergeTwoLists } from './mergeTwoLists';

// https://leetcode-cn.com/problems/sort-list/
// 148
// top100
export function sortList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }

  const middle = getHalfNode(head);
  const secondHead = middle.next;
  middle.next = null;

  return mergeTwoLists(sortList(head), sortList(secondHead));
}
