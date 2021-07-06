import { DoubleLinkedList, DoubleLinkedListNode } from '../doubleLinkedList';

export function partition(doubleLinkedList: DoubleLinkedList, x: number): DoubleLinkedList {
  const beforeHead: DoubleLinkedListNode = new DoubleLinkedListNode(null);
  let beforeCurrent: DoubleLinkedListNode = beforeHead;
  const afterHead: DoubleLinkedListNode = new DoubleLinkedListNode(null);
  let afterCurrent: DoubleLinkedListNode = afterHead;

  let tmpNode = doubleLinkedList.head;
  while (tmpNode) {
    if (tmpNode.value < x) {
      beforeCurrent.next = tmpNode;
      tmpNode.previous = beforeCurrent;
      beforeCurrent = tmpNode;
    } else {
      afterCurrent.next = tmpNode;
      tmpNode.previous = afterCurrent;
      afterCurrent = tmpNode;
    }
    tmpNode = tmpNode.next;
  }

  const head1 = beforeHead.next;
  let tail1 = null;
  if (head1) {
    head1.previous = null;
    tail1 = beforeCurrent;
    tail1.next = null;
  }

  const head2 = afterHead.next;
  let tail2 = null;
  if (head2) {
    head2.previous = null;
    tail2 = afterCurrent;
    tail2.next = null;
  }

  let head: DoubleLinkedListNode | null;
  let tail: DoubleLinkedListNode | null;
  if (head1 && head2) {
    head = head1;
    tail = tail2;
    tail1.next = head2;
    head2.previous = tail1;
  } else if (head1) {
    head = head1;
    tail = tail1;
  } else if (head2) {
    head = head2;
    tail = tail2;
  } else {
    head = null;
    tail = null;
  }

  doubleLinkedList.head = head;

  doubleLinkedList.tail = tail;
  return doubleLinkedList;
}
