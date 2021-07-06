import { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';
import { get } from './get';

export function deleteValueBase<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, count: number, value?: T): null | DoubleLinkedListNode<T> {
  let deleteCount = 0;
  let deletedNode = null;
  while (deleteCount < count && doubleLinkedList.head && doubleLinkedList.compare.equal(doubleLinkedList.head.value, value)) {
    deletedNode = doubleLinkedList.head;
    doubleLinkedList.head = doubleLinkedList.head.next;
    doubleLinkedList.size -= 1;
    ++deleteCount;
  }

  if (doubleLinkedList.head) {
    doubleLinkedList.head.previous = null;
  }

  let currentNode = doubleLinkedList.head;
  if (currentNode) {
    while (deleteCount < count && currentNode.next) {
      if (doubleLinkedList.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next;
        ++deleteCount;
        doubleLinkedList.size -= 1;

        if (currentNode.next.next) {
          currentNode.next.next.previous = currentNode;
        }
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  if (!currentNode || !currentNode.next) {
    doubleLinkedList.tail = currentNode;
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
    doubleLinkedList.size -= 1;
    return node;
  }
}

export function deleteIndex<T = unknown>(doubleLinkedList: DoubleLinkedList<T>, index: number): null | DoubleLinkedListNode<T> {
  const deleteNode = get(index, doubleLinkedList.size, doubleLinkedList.head, doubleLinkedList.tail);
  if (!deleteNode) {
    return null;
  }

  if (deleteNode === doubleLinkedList.head) {
    return doubleLinkedList.deleteHead();
  } else if (deleteNode === doubleLinkedList.tail) {
    return doubleLinkedList.deleteTail();
  } else {
    deleteNode.next.previous = deleteNode.previous;
    deleteNode.previous.next = deleteNode.next;
    doubleLinkedList.size -= 1;
    return deleteNode;
  }
}
