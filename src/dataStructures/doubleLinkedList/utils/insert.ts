import { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';
import { formatIndex, get } from './get';

export function insert<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, value: T, index: number): DoubleLinkedListNode<T> {
  const position = formatIndex(index, doubleLinkedList.size);
  if (position <= 0) {
    return doubleLinkedList.prepend(value);
  } else if (position >= doubleLinkedList.size) {
    return doubleLinkedList.append(value);
  } else {
    const oldPositionNode = get(position, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
    const newPositionNode = new DoubleLinkedListNode<T>(value, oldPositionNode, oldPositionNode.previous);
    oldPositionNode.previous.next = newPositionNode;
    oldPositionNode.previous = newPositionNode;
    doubleLinkedList.size += 1;
    return newPositionNode;
  }
}
