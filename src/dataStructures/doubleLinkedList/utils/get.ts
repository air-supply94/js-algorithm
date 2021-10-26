import type { DoubleLinkedListNode } from '../doubleLinkedList';

export function formatIndex(index: any, size: number): number {
  const indexInt = index | 0;
  if (indexInt < 0) {
    return indexInt + size;
  } else {
    return indexInt;
  }
}

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
