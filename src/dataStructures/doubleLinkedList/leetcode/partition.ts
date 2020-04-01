import {
  DoubleLinkedListInterface,
  DoubleLinkedListNodeInterface,
} from '../types';

export function partition(doubleLinkedList: DoubleLinkedListInterface, x: number): DoubleLinkedListInterface {
  let beforeHead: DoubleLinkedListNodeInterface | null = null;
  let before: DoubleLinkedListNodeInterface | null = null;
  let afterHead: DoubleLinkedListNodeInterface | null = null;
  let after: DoubleLinkedListNodeInterface | null = null;
  let head: DoubleLinkedListNodeInterface | null = null;
  let tail: DoubleLinkedListNodeInterface | null = null;

  doubleLinkedList.eachFromHead(node => {
    if (node.value < x) {
      if (!before) {
        before = beforeHead = node;
      } else {
        before.setNext(node);
        node.setPrevious(before);
        before = node;
      }
    } else {
      if (!after) {
        after = afterHead = node;
      } else {
        after.setNext(node);
        node.setPrevious(after);
        after = node;
      }
    }
  });

  if (before) {
    beforeHead.setPrevious(null);
    before.setNext(afterHead);
    head = beforeHead;
    tail = before;
  }

  if (afterHead) {
    afterHead.setPrevious(before);
    after.setNext(null);
    if (!head) {
      head = afterHead;
    }
    tail = after;
  }

  doubleLinkedList.setHead(head)
  .setTail(tail);
  return doubleLinkedList;
}
