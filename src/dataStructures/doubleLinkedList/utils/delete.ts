import type { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';
import { get } from './get';

export function deleteValueBase<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, count: number, value?: T): null | DoubleLinkedListNode<T> {
  const deleteCount = 0;
  let deletedNode = null;
  let currentNode = doubleLinkedList.head;
  while (deleteCount < count && currentNode) {
    const nextNode = currentNode.next;
    if (doubleLinkedList.compare.equal(currentNode.value, value)) {
      deletedNode = currentNode;
      deleteNode<T>(doubleLinkedList, currentNode);
    }
    currentNode = nextNode;
  }

  return deletedNode;
}

export function deleteNode<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
  if (node === doubleLinkedList.head) {
    return doubleLinkedList.deleteHead();
  } else if (node === doubleLinkedList.tail) {
    return doubleLinkedList.deleteTail();
  } else {
    node.next.previous = node.previous;
    node.previous.next = node.next;
    node.next = null;
    node.previous = null;
    doubleLinkedList.size--;
    return node;
  }
}

export function deleteIndex<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, index: number): null | DoubleLinkedListNode<T> {
  const node = get(index, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
  if (!node) {
    return null;
  }

  return deleteNode(doubleLinkedList, node);
}
