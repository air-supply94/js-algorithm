// import type { interfaces } from '../../../types';
// import { DoubleLinkedListNode } from '../doubleLinkedList';
import { ListNode } from './listNode';

/*
function mergeTwoLists<T = unknown>(firstHead: interfaces.DoubleLinkedListNode<T> | null, secondHead: interfaces.DoubleLinkedListNode<T> | null, comparator: interfaces.Comparator): interfaces.DoubleLinkedListNode<T> | null {
  const virtualHead: interfaces.DoubleLinkedListNode<T> = new DoubleLinkedListNode<T>(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: DoubleLinkedListNode<T> = virtualHead;

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

  if (virtualHead.next) {
    const head = virtualHead.next;
    head.previous = null;
    virtualHead.next = null;
    return head;
  } else {
    return null;
  }
}
*/

// https://leetcode-cn.com/problems/merge-two-sorted-lists/
// 21
// top100
// 剑指offer
export function mergeTwoLists(firstHead: ListNode | null, secondHead: ListNode | null): ListNode | null {
  const virtualHead: ListNode = new ListNode(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: ListNode = virtualHead;

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

  const head = virtualHead.next;
  virtualHead.next = null;
  return head;
}
