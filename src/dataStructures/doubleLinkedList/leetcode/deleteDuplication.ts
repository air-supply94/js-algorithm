import { ListNode } from './listNode';

// https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&tqId=23450&ru=/exam/oj/ta&qru=/ta/coding-interviews/question-ranking&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D1%26tpId%3D13%26type%3D13
// 剑指offer
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
