import { DoubleLinkedList } from '../doubleLinkedList';
import { get } from '../utils';

export function isPalindrome<T = unknown>(doubleLinkedList: DoubleLinkedList<T>): boolean {
  if (doubleLinkedList.size < 2) {
    return false;
  }

  let rightNode = get(doubleLinkedList.size >>> 1, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
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
