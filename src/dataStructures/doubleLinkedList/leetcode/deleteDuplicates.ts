import { DoubleLinkedListInterface } from '../index';

export function deleteDuplicates(doubleLinkedList: DoubleLinkedListInterface): DoubleLinkedListInterface {
  let currentNode = doubleLinkedList.head;
  while (currentNode && currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      if (currentNode.next.next) {
        currentNode.next.next.setPrevious(currentNode);
      }
      doubleLinkedList.setSize(doubleLinkedList.size - 1);
      currentNode.setNext(currentNode.next.next);
    } else {
      currentNode = currentNode.next;
    }
  }

  doubleLinkedList.setTail(currentNode);

  return doubleLinkedList;
}
