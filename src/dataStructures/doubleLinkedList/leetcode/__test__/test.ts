import { DoubleLinkedList } from '../../index';
import { deleteDuplicates } from '../deleteDuplicates';
import { getDecimalValue } from '../getDecimalValue';
import { isPalindrome } from '../isPalindrome';
import { addTwoNumbers } from '../addTwoNumbers';

describe('leetcode DoubleLinkedList', () => {
  it('deleteDuplicates', () => {
    const doubleLinkedList = new DoubleLinkedList();
    deleteDuplicates(doubleLinkedList);
    doubleLinkedList.fromArray([
      1,
      1,
      2,
      2,
      3,
      4,
      4,
    ]);
    deleteDuplicates(doubleLinkedList);

    expect(doubleLinkedList.toString())
    .toBe('1,2,3,4');
    expect(doubleLinkedList.size)
    .toBe(4);
    expect(doubleLinkedList.tail.next)
    .toBeNull();
    expect(doubleLinkedList.tail.previous.value)
    .toBe(3);
  });

  it('getDecimalValue', () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    doubleLinkedList.fromArray([
      1,
      1,
      1,
      1,
    ]);
    expect(getDecimalValue(doubleLinkedList))
    .toBe(15);
    doubleLinkedList.append(0);
    expect(getDecimalValue(doubleLinkedList))
    .toBe(30);
  });

  it('isPalindrome', () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    expect(isPalindrome(doubleLinkedList))
    .toBeFalsy();
    doubleLinkedList.fromArray([
      1,
      2,
      1,
    ]);
    expect(isPalindrome(doubleLinkedList))
    .toBeTruthy();
    doubleLinkedList.append(1);
    expect(isPalindrome(doubleLinkedList))
    .toBeFalsy();
    doubleLinkedList.insert(1, 1);
    doubleLinkedList.insert(2, 2);
    expect(isPalindrome(doubleLinkedList))
    .toBeTruthy();
  });

  it('addTwoNumbers', () => {
    const doubleLinkedList1 = new DoubleLinkedList<number>();
    const doubleLinkedList2 = new DoubleLinkedList<number>();
    expect(addTwoNumbers(doubleLinkedList1, doubleLinkedList2).size)
    .toBe(0);
    doubleLinkedList1.fromArray([
      1,
      2,
      3,
    ]);
    doubleLinkedList2.fromArray([
      4,
      7,
      9,
      9,
    ]);
    expect(addTwoNumbers(doubleLinkedList1, doubleLinkedList2)
    .toString())
    .toBe('5,9,2,0,1');
    doubleLinkedList1.fromArray([
      1,
      1,
    ]);
    expect(addTwoNumbers(doubleLinkedList1, doubleLinkedList2)
    .toString())
    .toBe('5,9,2,1,2');
  });
});
