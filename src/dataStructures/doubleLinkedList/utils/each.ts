import { DoubleLinkedListNode } from '../doubleLinkedList';
import { eachCallback } from '../types';

export function each<T = unknown>(
  startNode: DoubleLinkedListNode<T> | null,
  size: number,
  propertyKey: 'next' | 'previous',
  callback: eachCallback<T>
): void {
  let i = 0;
  let currentNode = startNode;
  while (i < size && currentNode && callback(currentNode) !== false) {
    currentNode = currentNode[propertyKey];
    i++;
  }
}
