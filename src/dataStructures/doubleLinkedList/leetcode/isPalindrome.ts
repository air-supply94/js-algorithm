import { DoubleLinkedListInterface } from '../types';

export function isPalindrome<T = unknown>(doubleLinkedList: DoubleLinkedListInterface<T>): boolean {
  if (doubleLinkedList.size < 2) {
    return false;
  }

  let tag = true;
  let rightNode = doubleLinkedList.get(doubleLinkedList.size / 2 | 0);
  let leftNode = doubleLinkedList.size % 2 === 0 ? rightNode.previous : rightNode;

  while (leftNode && rightNode) {
    if (leftNode.value !== rightNode.value) {
      tag = false;
      break;
    }
    leftNode = leftNode.previous;
    rightNode = rightNode.next;
  }

  return tag;
}
