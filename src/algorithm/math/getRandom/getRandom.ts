import { DoubleLinkedListNodeInterface } from '../../../dataStructures/doubleLinkedList/types';

export function getRandom(head: DoubleLinkedListNodeInterface<number>): number {
  let current = head;
  let result = null;
  let i = 0;
  let chance = 0;
  let random = 0;

  while (current) {
    i++;
    chance = 1 / i;
    random = Math.random();
    if (random < chance) {
      result = current.value;
    }
    current = current.next;
  }

  return result;
}
