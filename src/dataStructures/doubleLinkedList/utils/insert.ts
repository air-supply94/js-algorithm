import type { interfaces } from '../../../types';
import { DoubleLinkedListNode } from '../doubleLinkedList';
import { formatIndex, get } from './get';

export function insert<T = unknown>(
  doubleLinkedList: interfaces.DoubleLinkedList<T>,
  value: T,
  index: number,
): interfaces.DoubleLinkedListNode<T> {
  const position = formatIndex(index, doubleLinkedList.size);
  if (position <= 0) {
    return doubleLinkedList.prepend(value);
  } else if (position >= doubleLinkedList.size) {
    return doubleLinkedList.append(value);
  } else {
    const oldNode = get(position, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
    const newNode = new DoubleLinkedListNode(value, oldNode, oldNode.previous);
    oldNode.previous.next = newNode;
    oldNode.previous = newNode;
    doubleLinkedList.size++;
    return newNode;
  }
}
