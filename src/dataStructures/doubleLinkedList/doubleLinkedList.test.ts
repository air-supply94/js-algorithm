import { Comparator } from '../../utils';
import { DoubleLinkedList, DoubleLinkedListNode } from './doubleLinkedList';

describe('doubleLinkedList node', () => {
  test('should create list node with value', () => {
    const node = new DoubleLinkedListNode(1);

    expect(node.value)
      .toBe(1);
    expect(node.next)
      .toBeNull();
    expect(node.previous)
      .toBeNull();
  });

  test('should create list node with object as a value', () => {
    const nodeValue = {
      value: 1,
      key: 'test',
    };
    const node = new DoubleLinkedListNode(nodeValue);

    expect(node.value.value)
      .toBe(1);
    expect(node.value.key)
      .toBe('test');
    expect(node.next)
      .toBeNull();
    expect(node.previous)
      .toBeNull();
  });

  test('should link nodes together', () => {
    const node2 = new DoubleLinkedListNode(2);
    const node1 = new DoubleLinkedListNode(1, node2);
    const node3 = new DoubleLinkedListNode(10, node1, node2);

    expect(node1.next)
      .toBeDefined();
    expect(node1.previous)
      .toBeNull();
    expect(node2.next)
      .toBeNull();
    expect(node2.previous)
      .toBeNull();
    expect(node3.next)
      .toBeDefined();
    expect(node3.previous)
      .toBeDefined();
    expect(node1.value)
      .toBe(1);
    expect(node1.next.value)
      .toBe(2);
    expect(node3.next.value)
      .toBe(1);
    expect(node3.previous.value)
      .toBe(2);
  });

  test('should convert node to string', () => {
    const node = new DoubleLinkedListNode('1');

    expect(node.value)
      .toBe('1');

    node.value = 'string value';
    expect(node.value)
      .toBe('string value');
  });
});

describe('doubleLinkedList', () => {
  test('should create empty linked list', () => {
    const linkedList = new DoubleLinkedList(new Comparator());
    linkedList.append(1);

    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.isEmpty())
      .toBeFalsy();
    linkedList.clear();
    expect(linkedList.isEmpty())
      .toBeTruthy();
    expect(linkedList.isEmpty())
      .toBeTruthy();
  });

  test('should append node to linked list', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.head.next.value)
      .toBe(2);
    expect(linkedList.tail.previous.value)
      .toBe(1);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2');
  });

  test('should prepend node to linked list', () => {
    const linkedList = new DoubleLinkedList();

    linkedList.prepend(2);
    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.head.value)
      .toBe(2);
    expect(linkedList.tail.value)
      .toBe(2);

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.head.next.next.previous)
      .toBe(linkedList.head.next);
    expect(linkedList.tail.previous.next)
      .toBe(linkedList.tail);
    expect(linkedList.tail.previous.value)
      .toBe(2);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('3,2,1');
  });

  test('should create linked list from array', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.fromArray([
      1,
      1,
      2,
      3,
      3,
      3,
      4,
      5,
    ]);

    expect(linkedList.size)
      .toBe(8);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,1,2,3,3,3,4,5');
  });

  test('should delete linked list tail', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.deleteTail())
      .toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(3);

    const deletedNode1 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(2);
    expect(deletedNode1.value)
      .toBe(3);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(2);

    const deletedNode2 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(1);
    expect(deletedNode2.value)
      .toBe(2);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(1);

    const deletedNode3 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(0);
    expect(deletedNode3.value)
      .toBe(1);
    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();
  });

  test('should delete linked list head', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.deleteHead())
      .toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(2);

    const deletedNode1 = linkedList.deleteHead();

    expect(linkedList.size)
      .toBe(1);
    expect(deletedNode1.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.head.value)
      .toBe(2);
    expect(linkedList.tail.value)
      .toBe(2);

    const deletedNode2 = linkedList.deleteHead();

    expect(linkedList.size)
      .toBe(0);
    expect(deletedNode2.value)
      .toBe(2);
    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();
  });

  test('doubleLinkedList appendNode', () => {
    const linkedList = new DoubleLinkedList<number>();

    linkedList.append(1);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(1);

    linkedList.append(2);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(2);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2');

    linkedList.append(3);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(3);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('1,2,3');
  });

  test('doubleLinkedList prependNode', () => {
    const linkedList = new DoubleLinkedList<number>();

    linkedList.prepend(1);
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.tail.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(1);

    linkedList.prepend(2);
    expect(linkedList.head.value)
      .toBe(2);
    expect(linkedList.tail.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('2,1');

    linkedList.prepend(3);
    expect(linkedList.head.value)
      .toBe(3);
    expect(linkedList.tail.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.toArray()
      .map((item) => item.value)
      .join(','))
      .toBe('3,2,1');
  });
});
