import { DoubleLinkedList } from '../doubleLinkedList';

export function getDecimalValue(doubleLinkedList: DoubleLinkedList<number>): number {
  let result = 0;
  doubleLinkedList.eachFromHead((node) => {
    result = result * 2 + node.value;
  });
  return result;
}
