import type { ListNode } from '../listNode';

// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
// 160
export function getIntersectionNode(head1: ListNode | null, head2: ListNode | null): ListNode | null {
  if (head1 === null || head2 === null) {
    return null;
  }

  let current1 = head1;
  let current2 = head2;
  while (current1 !== current2) {
    current1 = current1 === null ? head2 : current1.next;
    current2 = current2 === null ? head1 : current2.next;
  }
  return current1;
}
