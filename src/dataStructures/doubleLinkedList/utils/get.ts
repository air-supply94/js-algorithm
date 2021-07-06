import { DoubleLinkedListNode } from '../doubleLinkedList';
import { formatIndex } from './formatIndex';

export function get<T = unknown>(index: number, size: number, head: null | DoubleLinkedListNode<T>, tail: null | DoubleLinkedListNode<T>): null | DoubleLinkedListNode<T> {
  const position = formatIndex(index, size);
  const middleIndex = size >>> 1;

  if (0 <= position && position <= middleIndex) {
    let i = 0;
    let currentNode = head;
    while (currentNode) {
      if (i === position) {
        return currentNode;
      }
      i++;
      currentNode = currentNode.next;
    }
    return null;
  } else if (middleIndex < position) {
    let i = size - 1;
    let currentNode = tail;
    while (currentNode) {
      if (i === position) {
        return currentNode;
      }
      i--;
      currentNode = currentNode.previous;
    }
    return null;
  } else {
    return null;
  }
}
