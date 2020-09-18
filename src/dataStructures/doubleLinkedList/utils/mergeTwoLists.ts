import { Comparator } from '../../../utils/comparator';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListNodeInterface } from '../types';

export function mergeTwoLists<T = unknown>(firstHead: DoubleLinkedListNodeInterface<T> | null, secondHead: DoubleLinkedListNodeInterface<T> | null, comparator: Comparator): DoubleLinkedListNodeInterface<T> | null {
  const head: DoubleLinkedListNodeInterface<T> = new DoubleLinkedListNode<T>(null);
  let firstHeadNode = firstHead;
  let secondHeadNode = secondHead;
  let currentNode: DoubleLinkedListNodeInterface<T> = head;

  while (firstHeadNode && secondHeadNode) {
    if (comparator.lessThanOrEqual(firstHeadNode.value, secondHeadNode.value)) {
      currentNode.setNext(firstHeadNode);
      firstHeadNode.setPrevious(currentNode);
      firstHeadNode = firstHeadNode.next;
    } else {
      currentNode.setNext(secondHeadNode);
      secondHeadNode.setPrevious(currentNode);
      secondHeadNode = secondHeadNode.next;
    }

    currentNode = currentNode.next;
  }

  const restNode = firstHeadNode || secondHeadNode;
  if (restNode) {
    restNode.setPrevious(currentNode);
  }
  currentNode.setNext(restNode);

  const resultNode = head.next;
  if (resultNode) {
    resultNode.setPrevious(null);
  }
  head.setNext(null);
  return resultNode;
}
