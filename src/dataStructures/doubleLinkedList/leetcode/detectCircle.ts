import { DoubleLinkedListNodeInterface } from '../types';

export function detectCircle<T = unknown>(startNode: DoubleLinkedListNodeInterface<T>, property: 'next' | 'previous'): null | DoubleLinkedListNodeInterface<T> {
  let slow = startNode;
  let fast = startNode;

  while (fast && fast[property]) {
    slow = slow[property];
    fast = fast[property][property];
    if (fast === slow) {
      break;
    }
  }

  if (!fast || !fast[property]) {
    return null;
  }

  slow = startNode;
  while (slow !== fast) {
    slow = slow[property];
    fast = fast[property];
  }
  return slow;
}
