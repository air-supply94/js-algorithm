import { DoubleLinkedList } from '../../doubleLinkedList';
import { addTwoNumbers } from '../addTwoNumbers';
import { deleteDuplicates } from '../deleteDuplicates';
import { detectCircle } from '../detectCircle';
import { flatten, FlattenDoubleLinkedListNode } from '../flatten';
import { getCircleLength } from '../getCircleLength';
import { getDecimalValue } from '../getDecimalValue';
import { hasCircle } from '../hasCircle';
import { isPalindrome } from '../isPalindrome';
import { mergeTwoLists } from '../mergeTwoLists';
import { partition } from '../partition';
import { swapPairs } from '../swapPairs';

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

    doubleLinkedList.append(3);
    doubleLinkedList.append(5);
    doubleLinkedList.append(6);
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
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
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

  it('flatten', () => {
    const node1 = new FlattenDoubleLinkedListNode(1);
    const node2 = new FlattenDoubleLinkedListNode(2);
    const node3 = new FlattenDoubleLinkedListNode(3);
    const node4 = new FlattenDoubleLinkedListNode(4);
    const node5 = new FlattenDoubleLinkedListNode(5);
    const node6 = new FlattenDoubleLinkedListNode(6);
    node1.setNext(node2);
    node2.setPrevious(node1)
      .setNext(node6)
      .setChild(node3);
    node3.setPrevious(node2)
      .setNext(node4);
    node4.setPrevious(node3)
      .setChild(node5);
    node5.setPrevious(node4);
    expect(flatten(null))
      .toBeNull();

    let flattenNode = flatten(node1);
    expect(node2.child)
      .toBeNull();
    expect(node4.child)
      .toBeNull();

    // @ts-ignore
    expect(detectCircle(node1, 'next'))
      .toBeNull();

    // @ts-ignore
    expect(detectCircle(node6, 'previous'))
      .toBeNull();

    const result = [];
    while (flattenNode) {
      result.push(flattenNode.value);

      // @ts-ignore
      flattenNode = flattenNode.next;
    }
    expect(result.toString())
      .toBe('1,2,3,4,5,6');
  });

  it('mergeTwoLists', () => {
    const doubleLinkedList1 = new DoubleLinkedList<number>();
    const doubleLinkedList2 = new DoubleLinkedList<number>();
    expect(mergeTwoLists(doubleLinkedList1, doubleLinkedList2).size)
      .toBe(0);
    doubleLinkedList1.append(1);
    doubleLinkedList1.append(3);
    doubleLinkedList1.append(5);
    doubleLinkedList1.append(7);
    doubleLinkedList2.append(2);
    doubleLinkedList2.append(4);
    doubleLinkedList2.append(6);

    mergeTwoLists<number>(doubleLinkedList1, doubleLinkedList2);
    expect(doubleLinkedList1.head.previous)
      .toBeNull();
    expect(doubleLinkedList1.tail.next)
      .toBeNull();
    expect(doubleLinkedList1.size)
      .toBe(7);
    expect(doubleLinkedList1.toString())
      .toBe('1,2,3,4,5,6,7');
    expect(hasCircle(doubleLinkedList1))
      .toBeFalsy();
  });
});
