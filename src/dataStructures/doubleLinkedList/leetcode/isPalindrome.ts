import { DoubleLinkedListInterface } from '../types';

export function isPalindrome<T = unknown>(doubleLinkedList: DoubleLinkedListInterface<T>): boolean {
  if (doubleLinkedList.size < 2) {
    return false;
  }

  let rightNode = doubleLinkedList.get((doubleLinkedList.size / 2) | 0);
  let leftNode = doubleLinkedList.size % 2 === 0 ? rightNode.previous : rightNode;

  while (leftNode && rightNode) {
    if (leftNode.value !== rightNode.value) {
      return false;
    }
    leftNode = leftNode.previous;
    rightNode = rightNode.next;
  }

  return true;
}
