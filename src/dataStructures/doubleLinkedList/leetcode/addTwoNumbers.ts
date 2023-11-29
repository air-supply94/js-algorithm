import { ListNode } from './listNode';

// https://leetcode-cn.com/problems/add-two-numbers/
// 2
// top100
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const virtualHead = new ListNode(null);
  let current = virtualHead;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;

  while (p1 || p2) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
    current.next = new ListNode(sum % 10);
    carry = (sum / 10) | 0;
    current = current.next;
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  const head = virtualHead.next;
  virtualHead.next = null;
  return head;
}
