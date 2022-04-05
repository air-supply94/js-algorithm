import { getHalfNode } from './isPalindrome';
import type { ListNode } from './listNode';
import { mergeTwoLists } from './mergeTwoLists';

// https://leetcode-cn.com/problems/sort-list/
// 148
export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const middle = getHalfNode(head);
  const secondHead = middle.next;
  middle.next = null;

  return mergeTwoLists(sortList(head), sortList(secondHead));
}
