import { DoubleLinkedList } from '../../doubleLinkedList';
import { hasCircle } from '../../leetcode/hasCircle';
import { insert } from '../insert';

test('DoubleLinkedList insert', () => {
  const linkedList = new DoubleLinkedList();
  linkedList.fromArray([
    1,
    2,
    3,
  ]);

  insert(linkedList, 0, -10);
  expect(linkedList.size)
    .toBe(4);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('0,1,2,3');
  expect(hasCircle(linkedList))
    .toBeFalsy();

  insert(linkedList, 4, 10);
  expect(linkedList.size)
    .toBe(5);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('0,1,2,3,4');
  expect(hasCircle(linkedList))
    .toBeFalsy();

  insert(linkedList, 10, 2);
  expect(linkedList.size)
    .toBe(6);
  expect(linkedList.toArray()
    .map((item) => item.value)
    .join(','))
    .toBe('0,1,10,2,3,4');

  expect(hasCircle(linkedList))
    .toBeFalsy();
});
