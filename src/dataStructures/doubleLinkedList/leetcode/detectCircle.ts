import { DoubleLinkedListNodeInterface } from '../types';

export function detectCircle(startNode: DoubleLinkedListNodeInterface, property: 'next' | 'previous'): null | DoubleLinkedListNodeInterface {
  if (startNode === null || startNode[property] === null) {
    return null;
  }

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
