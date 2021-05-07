import { Comparator } from '../../../utils';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListNodeInterface } from '../types';

export function mergeTwoLists<T = unknown>(firstHead: DoubleLinkedListNodeInterface<T> | null, secondHead: DoubleLinkedListNodeInterface<T> | null, comparator: Comparator): DoubleLinkedListNodeInterface<T> | null {
  const deathHead: DoubleLinkedListNodeInterface<T> = new DoubleLinkedListNode<T>(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: DoubleLinkedListNodeInterface<T> = deathHead;

  while (firstHeadNode && secondHeadNode) {
    if (comparator.lessThanOrEqual(firstHeadNode.value, secondHeadNode.value)) {
      currentNode.setNext(firstHeadNode);
      firstHeadNode.setPrevious(currentNode);
      firstHeadNode = firstHeadNode.next;
      currentNode = currentNode.next;
    } else {
      currentNode.setNext(secondHeadNode);
      secondHeadNode.setPrevious(currentNode);
      secondHeadNode = secondHeadNode.next;
      currentNode = currentNode.next;
    }
  }

  if (firstHeadNode) {
    currentNode.setNext(firstHeadNode);
    firstHeadNode.setPrevious(currentNode);
  }

  if (secondHeadNode) {
    currentNode.setNext(secondHeadNode);
    secondHeadNode.setPrevious(currentNode);
  }

  if (deathHead.next) {
    const head = deathHead.next;
    head.setPrevious(null);
    deathHead.setNext(null);
    return head;
  } else {
    return null;
  }
}
