import { DoubleLinkedListNodeInterface } from '../../../dataStructures/doubleLinkedList/types';

export function getRandom(head: DoubleLinkedListNodeInterface<number>): number {
  let current = head;
  let result = null;
  let i = 0;

  while (current) {
    i++;
    if (Math.random() < 1 / i) {
      result = current.value;
    }
    current = current.next;
  }

  return result;
}
