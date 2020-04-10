import { DoubleLinkedListInterface } from '../types';
import { DoubleLinkedList } from '../doubleLinkedList';

export function addTwoNumbers(l1: DoubleLinkedListInterface<number>, l2: DoubleLinkedListInterface<number>): DoubleLinkedListInterface {
  const resultDoubleLinkedList = new DoubleLinkedList<number>();
  let p1 = l1.head;
  let p2 = l2.head;
  let carry = 0;

  while (p1 || p2) {
    const sum = (p1 ? p1.value : 0) + (p2 ? p2.value : 0) + carry;
    const resultValue = sum % 10;
    carry = sum / 10 | 0;
    resultDoubleLinkedList.append(resultValue);
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
  }

  if (carry > 0) {
    resultDoubleLinkedList.append(carry);
  }

  return resultDoubleLinkedList;
}
