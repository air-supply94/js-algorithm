import type { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';
import { get } from './get';

export function deleteValueBase<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, count: number, value?: T): DoubleLinkedListNode<T> | null {
  const deleteCount = 0;
  let deletedNode = null;
  let currentNode = doubleLinkedList.head;
  while (deleteCount < count && currentNode) {
    const nextNode = currentNode.next;
    if (doubleLinkedList.comparator.equal(currentNode.value, value)) {
      deletedNode = currentNode;
      deleteNode(doubleLinkedList, currentNode);
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

export function deleteIndex<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, index: number): DoubleLinkedListNode<T> | null {
  const node = get(index, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
  if (node == null) {
    return null;
  }

  return deleteNode(doubleLinkedList, node);
}
