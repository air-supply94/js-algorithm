import type { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListNode } from '../doubleLinkedList';
import { formatIndex, get } from './get';

export function insert<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, value: T, index: number): DoubleLinkedListNode<T> {
  const position = formatIndex(index, doubleLinkedList.size);
  if (position <= 0) {
    return doubleLinkedList.prepend(value);
  } else if (position >= doubleLinkedList.size) {
    return doubleLinkedList.append(value);
  } else {
    const oldNode = get(position, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
    const newNode = new DoubleLinkedListNode<T>(value, oldNode, oldNode.previous);
    oldNode.previous.next = newNode;
    oldNode.previous = newNode;
    doubleLinkedList.size++;
    return newNode;
  }
}
