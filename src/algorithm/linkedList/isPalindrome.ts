import type { ListNode } from './listNode';
import { reverseList } from './reverse';

export function getHalfNode(head: ListNode): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// https://leetcode-cn.com/problems/palindrome-linked-list/
// 234
export function isPalindrome(head: ListNode): boolean {
  if (!head) {
    return true;
  }

  const firstTail = getHalfNode(head);
  const secondHead = reverseList(firstTail.next);

  let p1 = head;
  let p2 = secondHead;
  while (p1 && p2) {
    if (p1.val != p2.val) {
      firstTail.next = reverseList(secondHead);
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  firstTail.next = reverseList(secondHead);
  return true;
}
