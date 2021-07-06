import { DoubleLinkedList } from '../../doubleLinkedList';
import { sort } from '../sort';

test('doubleLinkedList sort', () => {
  const linkedList = new DoubleLinkedList();
  sort(linkedList);
  expect(linkedList.head)
    .toBeNull();
  expect(linkedList.tail)
    .toBeNull();

  linkedList.append(5);
  linkedList.append(6);
  linkedList.append(7);
  linkedList.append(8);
  linkedList.append(9);
  linkedList.append(4);
  linkedList.append(3);
  linkedList.append(2);
  linkedList.append(1);

  sort(linkedList);
  expect(linkedList.head.value)
    .toBe(1);
  expect(linkedList.tail.value)
    .toBe(9);
  expect(linkedList.toString())
    .toBe('1,2,3,4,5,6,7,8,9');
});
