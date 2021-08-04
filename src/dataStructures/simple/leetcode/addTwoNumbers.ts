import { ListNode } from '../listNode';

// https://leetcode-cn.com/problems/add-two-numbers/
// 2
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const deathNode = new ListNode(null);
  let current = deathNode;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  let sum = 0;

  while (p1 || p2) {
    sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
    carry = (sum / 10) | 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  if (deathNode.next) {
    const head = deathNode.next;
    deathNode.next = null;
    return head;
  } else {
    return null;
  }
}
