import {
  DoubleLinkedListInterface,
  DoubleLinkedListNodeInterface,
} from '../types';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';

export function partition(doubleLinkedList: DoubleLinkedListInterface, x: number): DoubleLinkedListInterface {
  const beforeHead: DoubleLinkedListNodeInterface = new DoubleLinkedListNode(null);
  let before: DoubleLinkedListNodeInterface = beforeHead;
  const afterHead: DoubleLinkedListNodeInterface = new DoubleLinkedListNode(null);
  let after: DoubleLinkedListNodeInterface = afterHead;
  let head: DoubleLinkedListNodeInterface | null = null;
  let tail: DoubleLinkedListNodeInterface | null = null;

  doubleLinkedList.eachFromHead(node => {
    if (node.value < x) {
      before.setNext(node);
      node.setPrevious(before);
      before = node;
    } else {
      after.setNext(node);
      node.setPrevious(after);
      after = node;
    }
  });

  if (beforeHead.next) {
    head = beforeHead.next;
    head.setPrevious(null);
    tail = before;
    tail.setNext(afterHead.next);
  }

  if (afterHead.next) {
    afterHead.next.setPrevious(tail);
    if (!head) {
      head = afterHead.next;
    }
    afterHead.setNext(null);
    tail = after;
  }

  doubleLinkedList.setHead(head)
  .setTail(tail);
  return doubleLinkedList;
}
