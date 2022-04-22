interface ListNode {
  val: number;
  next: ListNode | null;
}

// https://leetcode-cn.com/problems/linked-list-random-node/submissions/
// 382
export function getRandom(head: ListNode): number {
  let current = head;
  let result = null;
  let n = 0;

  while (current != null) {
    n++;
    if (Math.random() <= 1 / n) {
      result = current.val;
    }
    current = current.next;
  }

  return result;
}
