interface ListNode {
  val: number;
  next: ListNode | null;
}

// https://leetcode-cn.com/problems/linked-list-random-node/submissions/
// 382
export function getRandom(head: ListNode): number {
  let current = head;
  let result = null;
  let m = 0;

  while (current) {
    m++;
    if (Math.random() < 1 / m) {
      result = current.val;
    }
    current = current.next;
  }

  return result;
}
