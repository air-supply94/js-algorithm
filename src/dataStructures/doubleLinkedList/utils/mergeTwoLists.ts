import { Comparator } from '../../../utils';
import { DoubleLinkedListNode } from '../doubleLinkedList';

export function mergeTwoLists<T = unknown>(firstHead: DoubleLinkedListNode<T> | null, secondHead: DoubleLinkedListNode<T> | null, comparator: Comparator): DoubleLinkedListNode<T> | null {
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
