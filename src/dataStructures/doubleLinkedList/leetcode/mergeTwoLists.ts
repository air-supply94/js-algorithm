import { ListNode } from './listNode';

/*
function mergeTwoLists<T = unknown>(firstHead: DoubleLinkedListNode<T> | null, secondHead: DoubleLinkedListNode<T> | null, comparator: Comparator): DoubleLinkedListNode<T> | null {
  const deathHead: DoubleLinkedListNode<T> = new DoubleLinkedListNode<T>(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: DoubleLinkedListNode<T> = deathHead;

  while (firstHeadNode && secondHeadNode) {
    if (comparator.lessThanOrEqual(firstHeadNode.value, secondHeadNode.value)) {
      currentNode.next = firstHeadNode;
      firstHeadNode.previous = currentNode;
      firstHeadNode = firstHeadNode.next;
      currentNode = currentNode.next;
    } else {
      currentNode.next = secondHeadNode;
      secondHeadNode.previous = currentNode;
      secondHeadNode = secondHeadNode.next;
      currentNode = currentNode.next;
    }
  }

  if (firstHeadNode) {
    currentNode.next = firstHeadNode;
    firstHeadNode.previous = currentNode;
  }

  if (secondHeadNode) {
    currentNode.next = secondHeadNode;
    secondHeadNode.previous = currentNode;
  }

  if (deathHead.next) {
    const head = deathHead.next;
    head.previous = null;
    deathHead.next = null;
    return head;
  } else {
    return null;
  }
}
*/

// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 21
export function mergeTwoLists(firstHead: ListNode | null, secondHead: ListNode | null): ListNode | null {
  const deathHead: ListNode = new ListNode(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: ListNode = deathHead;

  while (firstHeadNode && secondHeadNode) {
    if (firstHeadNode.val <= secondHeadNode.val) {
      currentNode.next = firstHeadNode;
      firstHeadNode = firstHeadNode.next;
    } else {
      currentNode.next = secondHeadNode;
      secondHeadNode = secondHeadNode.next;
    }
    currentNode = currentNode.next;
  }

  if (firstHeadNode) {
    currentNode.next = firstHeadNode;
  } else if (secondHeadNode) {
    currentNode.next = secondHeadNode;
  }

  if (deathHead.next) {
    const head = deathHead.next;
    deathHead.next = null;
    return head;
  } else {
    return null;
  }
}
