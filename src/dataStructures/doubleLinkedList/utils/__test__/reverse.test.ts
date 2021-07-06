import { DoubleLinkedList } from '../../doubleLinkedList';
import { reverseBase, reverseBetween, reverseCount, reverseCountGroup } from '../reverse';

function getList() {
  const linkedList = new DoubleLinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  return linkedList;
}

describe('doubleLinkedList reverse', () => {
  test('reverse base', () => {
    expect(reverseBase(null))
      .toBeNull();

    const list1 = getList();
    list1.head = reverseBase(list1.head);
    expect(list1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('5,4,3,2,1');

    list1.head = reverseBase(list1.head);
    expect(list1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5');
  });

  test('reverse count', () => {
    expect(reverseCount(null, 1))
      .toBeNull();

    const list1 = getList();
    list1.head = reverseCount(list1.head, 1);
    expect(list1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5');

    const list2 = getList();
    list2.head = reverseCount(list2.head, 2);
    expect(list2.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1,3,4,5');

    const list3 = getList();
    list3.head = reverseCount(list3.head, 3);
    expect(list3.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('3,2,1,4,5');

    const list4 = getList();
    list4.head = reverseCount(list4.head, 4);
    expect(list4.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('4,3,2,1,5');

    const list5 = getList();
    list5.head = reverseCount(list5.head, 5);
    expect(list5.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('5,4,3,2,1');
  });

  test('reverseBetween', () => {
    const list1 = getList();
    expect(reverseBetween(null, 1, 2))
      .toBeNull();

    list1.head = reverseBetween(list1.head, 3, 4);
    expect(list1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,4,3,5');

    const list2 = getList();
    list2.head = reverseBetween(list2.head, 2, 5);
    expect(list2.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,5,4,3,2');

    const list3 = getList();
    list3.head = reverseBetween(list3.head, 1, 5);
    expect(list3.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('5,4,3,2,1');

    const list4 = getList();
    list4.head = reverseBetween(list4.head, 7, 10);
    expect(list4.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5');
  });

  test('reverseCountGroup', () => {
    expect(reverseCountGroup(null, 2))
      .toBeNull();

    const list1 = getList();
    list1.head = reverseCountGroup(list1.head, 2);
    expect(list1.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1,4,3,5');

    const list2 = getList();
    list2.append(6);
    list2.head = reverseCountGroup(list2.head, 2);
    expect(list2.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1,4,3,6,5');

    const list3 = getList();
    list3.head = reverseCountGroup(list3.head, 3);
    expect(list3.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('3,2,1,4,5');

    const list4 = getList();
    list4.head = reverseCountGroup(list4.head, 1);
    expect(list4.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3,4,5');
  });
});
