import { expect, test } from 'vitest';
import { DoubleLinkedList } from '../../doubleLinkedList';
import { find } from '../find';

test('should find node by value', () => {
  const linkedList = new DoubleLinkedList();

  expect(find(linkedList.head, { value: 5 }, linkedList.comparator)).toBeNull();

  linkedList.append(1);
  expect(find(linkedList.head, { value: 1 }, linkedList.comparator)).toBeDefined();

  linkedList.append(2);
  linkedList.append(3);

  const node = find(linkedList.head, { value: 2 }, linkedList.comparator);

  expect(node.value).toBe(2);
  expect(find(linkedList.head, { value: 5 }, linkedList.comparator)).toBeNull();
});

test('should find node by callback', () => {
  const linkedList = new DoubleLinkedList<{ value: number; key: string }>();

  linkedList.append({
    value: 1,
    key: 'test1',
  });
  linkedList.append({
    value: 2,
    key: 'test2',
  });
  linkedList.append({
    value: 3,
    key: 'test3',
  });

  const node = find(linkedList.head, { callback: (value) => value.key === 'test2' }, linkedList.comparator);

  expect(node).toBeDefined();
  expect(node.value.value).toBe(2);
  expect(node.value.key).toBe('test2');
  expect(find(linkedList.head, { callback: (value) => value.key === 'test5' }, linkedList.comparator)).toBeNull();
});

test('should find node by means of custom compare function', () => {
  const linkedList = new DoubleLinkedList<{ value: number; customValue: string }>((a, b) => {
    if (a.customValue === b.customValue) {
      return 0;
    }

    return a.customValue < b.customValue ? -1 : 1;
  });

  linkedList.append({
    value: 1,
    customValue: 'test1',
  });
  linkedList.append({
    value: 2,
    customValue: 'test2',
  });
  linkedList.append({
    value: 3,
    customValue: 'test3',
  });

  const node = find(
    linkedList.head,
    {
      value: {
        value: 2,
        customValue: 'test2',
      },
    },
    linkedList.comparator,
  );

  expect(node).toBeDefined();
  expect(node.value.value).toBe(2);
  expect(node.value.customValue).toBe('test2');
  expect(
    find(
      linkedList.head,
      {
        value: {
          value: 2,
          customValue: 'test5',
        },
      },
      linkedList.comparator,
    ),
  ).toBeNull();
});
