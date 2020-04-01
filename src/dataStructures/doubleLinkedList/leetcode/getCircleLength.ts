import { DoubleLinkedListNodeInterface } from '../types';
import { detectCircle } from './detectCircle';

export function getCircleLength(startNode: DoubleLinkedListNodeInterface, property: 'next' | 'previous'): number {
  const startCircleNode = detectCircle(startNode, property);
  if (!startCircleNode) {
    return 0;
  }

  let length = 1;
  let currentNode = startCircleNode[property];
  while (currentNode !== startCircleNode) {
    length++;
    currentNode = currentNode[property];
  }
  return length;
}
