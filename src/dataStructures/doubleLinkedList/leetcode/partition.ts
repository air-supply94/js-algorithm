import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../types';

export function partition(doubleLinkedList: DoubleLinkedListInterface, x: number): DoubleLinkedListInterface {
  const beforeHead: DoubleLinkedListNodeInterface = new DoubleLinkedListNode(null);
  let beforeCurrent: DoubleLinkedListNodeInterface = beforeHead;
  const afterHead: DoubleLinkedListNodeInterface = new DoubleLinkedListNode(null);
  let afterCurrent: DoubleLinkedListNodeInterface = afterHead;

  doubleLinkedList.eachFromHead((node) => {
    if (node.value < x) {
      beforeCurrent.setNext(node);
      node.setPrevious(beforeCurrent);
      beforeCurrent = node;
    } else {
      afterCurrent.setNext(node);
      node.setPrevious(afterCurrent);
      afterCurrent = node;
    }
  });

  const head1 = beforeHead.next;
  let tail1 = null;
  if (head1) {
    head1.setPrevious(null);
    tail1 = beforeCurrent;
    tail1.setNext(null);
  }

  const head2 = afterHead.next;
  let tail2 = null;
  if (head2) {
    head2.setPrevious(null);
    tail2 = afterCurrent;
    tail2.setNext(null);
  }

  let head: DoubleLinkedListNodeInterface | null;
  let tail: DoubleLinkedListNodeInterface | null;
  if (head1 && head2) {
    head = head1;
    tail = tail2;
    tail1.setNext(head2);
    head2.setPrevious(tail1);
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

  doubleLinkedList.setHead(head)
    .setTail(tail);
  return doubleLinkedList;
}
