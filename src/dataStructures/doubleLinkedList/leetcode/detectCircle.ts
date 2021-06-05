import { DoubleLinkedListNodeInterface } from '../types';

export function detectCircle<T = unknown>(startNode: DoubleLinkedListNodeInterface<T>, property: 'next' | 'previous'): null | DoubleLinkedListNodeInterface<T> {
  let slow = startNode;
  let fast = startNode;

  while (fast && fast[property]) {
    slow = slow[property];
    fast = fast[property][property];
    if (slow === fast) {
      break;
    }
  }

  if (!fast || !fast[property]) {
    return null;
  }

  let start = startNode;
  let end = slow;
  while (start !== end) {
    start = start[property];
    end = end[property];
  }

  return start;
}
