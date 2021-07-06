import { DoubleLinkedListNode } from '../doubleLinkedList';

export function getDecimalValue(node: DoubleLinkedListNode<number>): number {
  let result = 0;
  let currentNode = node;
  while (currentNode) {
    result = result * 2 + currentNode.value;
    currentNode = currentNode.next;
  }
  return result;
}
