import { DoubleLinkedList } from '../../index';
import { deleteDuplicates } from '../deleteDuplicates';
import { getDecimalValue } from '../getDecimalValue';
import { isPalindrome } from '../isPalindrome';
import { addTwoNumbers } from '../addTwoNumbers';
import { swapPairs } from '../swapPairs';
import { partition } from '../partition';
import { hasCircle } from '../hasCircle';
import { detectCircle } from '../detectCircle';
import { getCircleLength } from '../getCircleLength';

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
    expect(hasCircle(doubleLinkedList))
    .toBeFalsy();
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

  it('swapPairs', () => {
    const doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.fromArray([
      1,
      2,
    ]);

    expect(swapPairs(doubleLinkedList)
    .toString())
    .toBe('2,1');

    doubleLinkedList.append(4);
    expect(swapPairs(doubleLinkedList)
    .toString())
    .toBe('1,2,4');
    expect(hasCircle(doubleLinkedList))
    .toBeFalsy();

    doubleLinkedList.append(3)
    .append(5)
    .append(6);
    expect(swapPairs(doubleLinkedList)
    .toString())
    .toBe('2,1,3,4,6,5');
    expect(hasCircle(doubleLinkedList))
    .toBeFalsy();

  });

  it('partition', () => {
    const doubleLinkedList = new DoubleLinkedList();
    doubleLinkedList.fromArray([
      2,
      1,
    ]);

    expect(partition(doubleLinkedList, 3)
    .toString())
    .toBe('2,1');
    expect(partition(doubleLinkedList, 0)
    .toString())
    .toBe('2,1');

    doubleLinkedList.append(3);
    expect(partition(doubleLinkedList, 2)
    .toString())
    .toBe('1,2,3');
    expect(hasCircle(doubleLinkedList))
    .toBeFalsy();

    expect(doubleLinkedList.head.value)
    .toBe(1);
    expect(doubleLinkedList.head.previous)
    .toBeNull();
    expect(doubleLinkedList.tail.value)
    .toBe(3);
    expect(doubleLinkedList.tail.next)
    .toBeNull();

  });

  it('hasCircle and detectCircle and getCircleLength', () => {
    const linkedList = new DoubleLinkedList();
    expect(hasCircle(linkedList))
    .toBeFalsy();
    expect(getCircleLength(linkedList.head, 'next'))
    .toBe(0);
    linkedList.append(1)
    .append(2)
    .append(3)
    .append(4)
    .append(5);
    expect(hasCircle(linkedList))
    .toBeFalsy();

    linkedList.tail.setNext(linkedList.head);
    expect(hasCircle(linkedList))
    .toBeTruthy();
    expect(getCircleLength(linkedList.head, 'next'))
    .toBe(5);
    linkedList.tail.setNext(null);

    linkedList.head.setPrevious(linkedList.tail.previous);
    expect(detectCircle(linkedList.tail, 'previous').value)
    .toBe(4);
    expect(getCircleLength(linkedList.tail, 'previous'))
    .toBe(4);
    expect(hasCircle(linkedList))
    .toBeTruthy();
  });
});
