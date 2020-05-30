import { DoubleLinkedListInterface } from '../types';

export function swapPairs(doubleLinkedList: DoubleLinkedListInterface): DoubleLinkedListInterface {
  if (doubleLinkedList.size <= 2) {
    return doubleLinkedList.reverse();
  }

  let firstNode = doubleLinkedList.head;
  while (firstNode && firstNode.next) {
    const secondNode = firstNode.next;
    const nextFirstNode = secondNode.next;
    if (firstNode === doubleLinkedList.head) {
      doubleLinkedList.setHead(secondNode);
      secondNode.setPrevious(null);

      firstNode.setPrevious(secondNode)
        .setNext(secondNode.next);

      secondNode.next.setPrevious(firstNode);
      secondNode.setNext(firstNode);
    } else if (secondNode === doubleLinkedList.tail) {
      doubleLinkedList.setTail(firstNode);
      firstNode.setNext(null);

      secondNode.setPrevious(firstNode.previous)
        .setNext(firstNode);

      firstNode.previous.setNext(secondNode);
      firstNode.setPrevious(secondNode);
    } else {
      secondNode.next.setPrevious(firstNode);
      firstNode.setNext(secondNode.next);

      firstNode.previous.setNext(secondNode);
      secondNode.setPrevious(firstNode.previous);

      firstNode.setPrevious(secondNode);
      secondNode.setNext(firstNode);
    }

    firstNode = nextFirstNode;
  }
  return doubleLinkedList;
}
