import type { DoubleLinkedListNode } from '../doubleLinkedList';

export function formatIndex(index: any, size: number): number {
  const indexInt = index | 0;
  return indexInt < 0 ? indexInt + size : indexInt;
}

export function get<T = unknown>(index: number, size: number, head: null | DoubleLinkedListNode<T>, tail: null | DoubleLinkedListNode<T>): null | DoubleLinkedListNode<T> {
  const position = formatIndex(index, size);
  const middleIndex = size >>> 1;

  if (0 <= position && position <= middleIndex) {
    let i = 0;
    let currentNode = head;
    while (currentNode && i !== position) {
      i++;
      currentNode = currentNode.next;
    }
    return currentNode;
  } else if (middleIndex < position) {
    let i = size - 1;
    let currentNode = tail;
    while (currentNode && i !== position) {
      i--;
      currentNode = currentNode.previous;
    }
    return currentNode;
  } else {
    return null;
  }
}
