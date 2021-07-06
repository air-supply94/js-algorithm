import { DoubleLinkedList } from '../../doubleLinkedList';
import { mergeTwoLists, insert } from '../../utils';
import { addTwoNumbers } from '../addTwoNumbers';
import { detectCircle } from '../detectCircle';
import { getCircleLength } from '../getCircleLength';
import { getDecimalValue } from '../getDecimalValue';
import { hasCircle } from '../hasCircle';
import { isPalindrome } from '../isPalindrome';
import { mergeKLists } from '../mergeKLists';
import { partition } from '../partition';

describe('leetcode DoubleLinkedList', () => {
  test('getDecimalValue', () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    doubleLinkedList.fromArray([
      1,
      1,
      1,
      1,
    ]);
    expect(getDecimalValue(doubleLinkedList.head))
      .toBe(15);
    doubleLinkedList.append(0);
    expect(getDecimalValue(doubleLinkedList.head))
      .toBe(30);
  });

  test('isPalindrome', () => {
    const doubleLinkedList = new DoubleLinkedList<number>();
    expect(isPalindrome<number>(doubleLinkedList))
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
    insert(doubleLinkedList, 1, 1);
    insert(doubleLinkedList, 2, 2);
    expect(isPalindrome(doubleLinkedList))
      .toBeTruthy();
  });

  test('addTwoNumbers', () => {
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
      .toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('5,9,2,0,1');
    doubleLinkedList1.fromArray([
      1,
      1,
    ]);
    expect(addTwoNumbers(doubleLinkedList1, doubleLinkedList2)
      .toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('5,9,2,1,2');
  });

  test('partition', () => {
    const doubleLinkedList = new DoubleLinkedList();
    expect(partition(doubleLinkedList, 0).size)
      .toBe(0);
    doubleLinkedList.fromArray([
      2,
      1,
    ]);

    expect(partition(doubleLinkedList, 3)
      .toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1');
    expect(partition(doubleLinkedList, 0)
      .toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1');

    doubleLinkedList.append(3);
    expect(partition(doubleLinkedList, 2)
      .toArray()
      .map((item) => item.value)
      .join(','))
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

  test('hasCircle and detectCircle and getCircleLength', () => {
    const linkedList = new DoubleLinkedList();
    expect(hasCircle(linkedList))
      .toBeFalsy();
    expect(getCircleLength(linkedList.head, 'next'))
      .toBe(0);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    expect(hasCircle(linkedList))
      .toBeFalsy();

    linkedList.tail.next = linkedList.head;
    expect(hasCircle(linkedList))
      .toBeTruthy();
    expect(getCircleLength(linkedList.head, 'next'))
      .toBe(5);
    linkedList.tail.next = null;

    linkedList.head.previous = linkedList.tail.previous;
    expect(detectCircle(linkedList.tail, 'previous').value)
      .toBe(4);
    expect(getCircleLength(linkedList.tail, 'previous'))
      .toBe(4);
    expect(hasCircle(linkedList))
      .toBeTruthy();
  });

  test('mergeTwoLists', () => {
    const doubleLinkedList1 = new DoubleLinkedList<number>();
    const doubleLinkedList2 = new DoubleLinkedList<number>();
    expect(mergeTwoLists(doubleLinkedList1.head, doubleLinkedList2.head, doubleLinkedList1.compare))
      .toBeNull();
    doubleLinkedList1.append(1);
    doubleLinkedList1.append(3);
    doubleLinkedList1.append(5);
    doubleLinkedList1.append(7);
    doubleLinkedList2.append(2);
    doubleLinkedList2.append(4);
    doubleLinkedList2.append(6);

    const resultHead = mergeTwoLists(doubleLinkedList1.head, doubleLinkedList2.head, doubleLinkedList1.compare);
    const size = doubleLinkedList1.size + doubleLinkedList2.size;
    let tail = doubleLinkedList1.head;
    let head = doubleLinkedList1.head;
    while (tail && tail.next) {
      tail = tail.next;
    }
    while (head && head.previous) {
      head = head.previous;
    }
    doubleLinkedList1.head = head;
    doubleLinkedList1.tail = tail;
    doubleLinkedList1.size = size;
    doubleLinkedList2.head = head;
    doubleLinkedList2.tail = tail;
    doubleLinkedList2.size = size;

    expect(doubleLinkedList1.head)
      .toBe(resultHead);
    expect(doubleLinkedList2.head)
      .toBe(resultHead);
    expect(doubleLinkedList1.head.previous)
      .toBeNull();
    expect(doubleLinkedList2.tail.next)
      .toBeNull();
    expect(doubleLinkedList1.size)
      .toBe(7);
    expect(doubleLinkedList1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5,6,7');
    expect(hasCircle(doubleLinkedList1))
      .toBeFalsy();
  });

  test('mergeKLists', () => {
    const doubleLinkedList1 = new DoubleLinkedList<number>();
    const doubleLinkedList2 = new DoubleLinkedList<number>();
    expect(mergeKLists([
      doubleLinkedList1.head,
      doubleLinkedList2.head,
    ], doubleLinkedList1.compare))
      .toBeNull();
    doubleLinkedList1.append(2);
    doubleLinkedList1.append(3);
    doubleLinkedList1.append(5);
    doubleLinkedList1.append(6);
    doubleLinkedList1.append(7);
    doubleLinkedList2.append(1);
    doubleLinkedList2.append(4);
    doubleLinkedList2.append(6);

    const resultHead = mergeKLists([
      doubleLinkedList1.head,
      doubleLinkedList2.head,
    ], doubleLinkedList1.compare);
    const size = doubleLinkedList1.size + doubleLinkedList2.size;
    let tail = doubleLinkedList1.head;
    let head = doubleLinkedList1.head;
    while (tail && tail.next) {
      tail = tail.next;
    }
    while (head && head.previous) {
      head = head.previous;
    }
    doubleLinkedList1.head = head;
    doubleLinkedList1.tail = tail;
    doubleLinkedList1.size = size;

    doubleLinkedList2.head = head;
    doubleLinkedList2.tail = tail;
    doubleLinkedList2.size = size;

    expect(doubleLinkedList1.head)
      .toBe(resultHead);
    expect(doubleLinkedList2.head)
      .toBe(resultHead);
    expect(doubleLinkedList1.head.previous)
      .toBeNull();
    expect(doubleLinkedList2.tail.next)
      .toBeNull();
    expect(doubleLinkedList1.size)
      .toBe(8);
    expect(doubleLinkedList1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5,6,6,7');
    expect(hasCircle(doubleLinkedList1))
      .toBeFalsy();
  });
});
