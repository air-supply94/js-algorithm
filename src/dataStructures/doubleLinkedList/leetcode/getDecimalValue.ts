import { DoubleLinkedListInterface } from '../types';

export function getDecimalValue(doubleLinkedList: DoubleLinkedListInterface<number>): number {
  let result = 0;
  doubleLinkedList.eachFromHead(node => {
    result = result * 2 + node.value;
  });
  return result;
}
