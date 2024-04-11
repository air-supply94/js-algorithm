import { ListNode } from './listNode';

// 剑指offer
// https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef
export function deleteDuplication(head: ListNode): ListNode {
  const virtualNode = new ListNode();
  let virtualCurrentNode = virtualNode;
  let currentNode = head;

  while (currentNode) {
    if (!currentNode.next || currentNode.val !== currentNode.next.val) {
      virtualCurrentNode.next = currentNode;
      virtualCurrentNode = currentNode;
      currentNode = currentNode.next;
      virtualCurrentNode.next = null;
    } else {
      const deleteNode = currentNode;
      while (currentNode && currentNode.val === deleteNode.val) {
        currentNode = currentNode.next;
      }
    }
  }

  return virtualNode.next;
}
