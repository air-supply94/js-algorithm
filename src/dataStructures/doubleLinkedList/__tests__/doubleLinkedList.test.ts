import { Comparator } from '../../../utils';
import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListNode } from '../doubleLinkedListNode';
import { hasCircle } from '../leetcode/hasCircle';

describe('DoubleLinkedListNode', () => {
  it('should create list node with value', () => {
    const node = new DoubleLinkedListNode(1);

    expect(node.value)
      .toBe(1);
    expect(node.next)
      .toBeNull();
    expect(node.previous)
      .toBeNull();
  });

  it('should create list node with object as a value', () => {
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

  it('should link nodes together', () => {
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

  it('should convert node to string', () => {
    const node = new DoubleLinkedListNode('1');

    expect(node.toString())
      .toBe('1');

    node.setValue('string value');
    expect(node.toString())
      .toBe('string value');
  });

  it('should convert node to string with custom stringifier', () => {
    const nodeValue = {
      value: 1,
      key: 'test',
    };
    const node = new DoubleLinkedListNode(nodeValue);
    const toStringCallback = (value) => `value: ${value.value}, key: ${value.key}`;
    expect(node.toString(toStringCallback))
      .toBe('value: 1, key: test');
  });
});

describe('Index', () => {
  it('should create empty linked list', () => {
    const linkedList = new DoubleLinkedList(new Comparator());
    linkedList.append(1);

    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.isEmpty())
      .toBeFalsy();
    expect(linkedList.has(1))
      .toBeTruthy();
    expect(linkedList.has(2))
      .toBeFalsy();
    expect(linkedList.clear())
      .toEqual(linkedList);
    expect(linkedList.isEmpty())
      .toBeTruthy();
    expect(linkedList.isEmpty())
      .toBeTruthy();
  });

  it('should append node to linked list', () => {
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
    expect(linkedList.toString())
      .toBe('1,2');
  });

  it('should prepend node to linked list', () => {
    const linkedList = new DoubleLinkedList();

    linkedList.prepend(2);
    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.head.toString())
      .toBe('2');
    expect(linkedList.tail.toString())
      .toBe('2');

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
    expect(linkedList.toString())
      .toBe('3,2,1');
  });

  it('should create linked list from array', () => {
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
    expect(linkedList.toString())
      .toBe('1,1,2,3,3,3,4,5');
  });

  it('should create linked eachFromHead', () => {
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

    const array = [];
    linkedList.eachFromHead((node) => {
      if (node.value > 1) {
        return false;
      }
      array.push(node.value);
      return true;
    });
    expect(array.toString())
      .toBe('1,1');
  });

  it('should create linked eachFromTail', () => {
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

    const array = [];
    linkedList.eachFromTail((node) => {
      if (node.value < 5) {
        return false;
      }

      array.push(node.value);
      return true;
    });
    expect(array.toString())
      .toBe('5');
    expect(linkedList.delete(3).value)
      .toBe(3);
    expect(linkedList.toString())
      .toBe('1,1,2,3,3,4,5');
  });

  it('should reverse linked list', () => {
    const linkedList = new DoubleLinkedList();

    linkedList.append(1);
    linkedList.reverse();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.head.previous)
      .toBeNull();
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    expect(linkedList.toString())
      .toBe('1,2,3,4');
    linkedList.reverse();
    expect(linkedList.toString())
      .toBe('4,3,2,1');
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.head.previous)
      .toBeNull();

    linkedList.deleteAll(4);
    linkedList.deleteAll(3);
    linkedList.deleteAll(2);
    linkedList.reverse();
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.next)
      .toBeNull();
    expect(linkedList.head.value)
      .toBe(1);
    expect(linkedList.size)
      .toBe(1);
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.deleteAll(4))
      .toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.size)
      .toBe(8);
    expect(linkedList.head.toString())
      .toBe('1');
    expect(linkedList.tail.toString())
      .toBe('5');

    const deletedNode = linkedList.deleteAll(3);
    expect(linkedList.size)
      .toBe(5);
    expect(deletedNode.value)
      .toBe(3);
    expect(linkedList.toString())
      .toBe('1,1,2,4,5');
    expect(linkedList.tail.previous.previous.value)
      .toBe(2);

    linkedList.deleteAll(3);
    expect(linkedList.size)
      .toBe(5);
    expect(linkedList.toString())
      .toBe('1,1,2,4,5');

    linkedList.deleteAll(1);
    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.toString())
      .toBe('2,4,5');

    expect(linkedList.head.toString())
      .toBe('2');
    expect(linkedList.head.next.next)
      .toBe(linkedList.tail);
    expect(linkedList.tail.previous.previous)
      .toBe(linkedList.head);
    expect(linkedList.tail.toString())
      .toBe('5');

    linkedList.deleteAll(5);
    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.toString())
      .toBe('2,4');

    expect(linkedList.head.toString())
      .toBe('2');
    expect(linkedList.tail.toString())
      .toBe('4');

    linkedList.deleteAll(4);
    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.toString())
      .toBe('2');

    expect(linkedList.head.toString())
      .toBe('2');
    expect(linkedList.tail.toString())
      .toBe('2');
    expect(linkedList.head)
      .toBe(linkedList.tail);

    linkedList.deleteAll(2);
    expect(linkedList.size)
      .toBe(0);
    expect(linkedList.toString())
      .toBe('');
  });

  it('should delete linked list tail', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.deleteTail())
      .toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.size)
      .toBe(3);
    expect(linkedList.head.toString())
      .toBe('1');
    expect(linkedList.tail.toString())
      .toBe('3');

    const deletedNode1 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(2);
    expect(deletedNode1.value)
      .toBe(3);
    expect(linkedList.toString())
      .toBe('1,2');
    expect(linkedList.head.toString())
      .toBe('1');
    expect(linkedList.tail.toString())
      .toBe('2');

    const deletedNode2 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(1);
    expect(deletedNode2.value)
      .toBe(2);
    expect(linkedList.toString())
      .toBe('1');
    expect(linkedList.head.toString())
      .toBe('1');
    expect(linkedList.tail.toString())
      .toBe('1');

    const deletedNode3 = linkedList.deleteTail();

    expect(linkedList.size)
      .toBe(0);
    expect(deletedNode3.value)
      .toBe(1);
    expect(linkedList.toString())
      .toBe('');
    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();
  });

  it('should delete linked list head', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.deleteHead())
      .toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.head.toString())
      .toBe('1');
    expect(linkedList.tail.toString())
      .toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    expect(linkedList.size)
      .toBe(1);
    expect(deletedNode1.value)
      .toBe(1);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.toString())
      .toBe('2');
    expect(linkedList.head.toString())
      .toBe('2');
    expect(linkedList.tail.toString())
      .toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    expect(linkedList.size)
      .toBe(0);
    expect(deletedNode2.value)
      .toBe(2);
    expect(linkedList.toString())
      .toBe('');
    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();
  });

  it('should delete linked head and tail', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(1);
    linkedList.append(1);

    expect(linkedList.size)
      .toBe(5);
    expect(linkedList.toString())
      .toBe('1,1,2,1,1');
    linkedList.deleteAll(1);
    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.toString())
      .toBe('2');
    expect(linkedList.head.next)
      .toBeNull();
    expect(linkedList.head.value)
      .toBe(2);
    expect(linkedList.head.previous)
      .toBeNull();
  });

  it('should delete linked head and tail111', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(3);

    expect(linkedList.size)
      .toBe(6);
    expect(linkedList.toString())
      .toBe('1,1,2,1,1,3');
    linkedList.deleteAll(1);
    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.toString())
      .toBe('2,3');
    expect(linkedList.head.next.value)
      .toBe(3);
    expect(linkedList.head.value)
      .toBe(2);
    expect(linkedList.head.previous)
      .toBeNull();
    expect(linkedList.tail.previous.value)
      .toBe(2);
    expect(linkedList.tail.value)
      .toBe(3);
    expect(linkedList.tail.next)
      .toBeNull();
  });

  it('should be possible to store objects in the list and to print them out', () => {
    const linkedList = new DoubleLinkedList();

    const nodeValue1 = {
      value: 1,
      key: 'key1',
    };
    const nodeValue2 = {
      value: 2,
      key: 'key2',
    };

    linkedList.append(nodeValue1);
    linkedList.prepend(nodeValue2);
    expect(linkedList.size)
      .toBe(2);

    const nodeStringifier = (value) => `${value.key}:${value.value}`;

    expect(linkedList.toString(nodeStringifier))
      .toBe('key2:2,key1:1');
  });

  it('should find node by value', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.find({ value: 5 }))
      .toBeNull();

    linkedList.append(1);
    expect(linkedList.find({ value: 1 }))
      .toBeDefined();

    linkedList.append(2);
    linkedList.append(3);

    const node = linkedList.find({ value: 2 });

    expect(node.value)
      .toBe(2);
    expect(linkedList.find({ value: 5 }))
      .toBeNull();
  });

  it('should find node by callback', () => {
    const linkedList = new DoubleLinkedList<{ value: number; key: string; }>();

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

    const node = linkedList.find({ callback: (value) => value.key === 'test2' });

    expect(node)
      .toBeDefined();
    expect(node.value.value)
      .toBe(2);
    expect(node.value.key)
      .toBe('test2');
    expect(linkedList.find({ callback: (value) => value.key === 'test5' }))
      .toBeNull();
  });

  it('should find node by means of custom compare function', () => {
    const comparatorFunction = (a, b) => {
      if (a.customValue === b.customValue) {
        return 0;
      }

      return a.customValue < b.customValue ? -1 : 1;
    };

    const linkedList = new DoubleLinkedList<{ value: number; customValue: string; }>(comparatorFunction);

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

    const node = linkedList.find({
      value: {
        value: 2,
        customValue: 'test2',
      },
    });

    expect(node)
      .toBeDefined();
    expect(node.value.value)
      .toBe(2);
    expect(node.value.customValue)
      .toBe('test2');
    expect(linkedList.find({
      value: {
        value: 2,
        customValue: 'test5',
      },
    }))
      .toBeNull();
  });

  it('add undefined', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.find({ value: 5 }))
      .toBeNull();

    linkedList.append(undefined);
    expect(linkedList.find({ value: undefined }))
      .toBeDefined();
    expect(linkedList.size)
      .toBe(1);
    expect(linkedList.has(undefined))
      .toBe(true);
  });

  it('connect', () => {
    const linkedList1 = new DoubleLinkedList();
    linkedList1.fromArray([
      1,
      2,
      3,
    ]);

    const linkedList2 = new DoubleLinkedList();
    linkedList2.fromArray([
      4,
      5,
      6,
    ]);

    const linkedList3 = new DoubleLinkedList();
    linkedList3.fromArray([
      7,
      8,
      9,
    ]);
    linkedList1.connect(linkedList1);

    expect(linkedList1.size)
      .toBe(6);
    linkedList1.clear()
      .fromArray([
        1,
        2,
        3,
      ])
      .connect(linkedList2, linkedList3);

    expect(linkedList1.size)
      .toBe(9);
    expect(hasCircle(linkedList1))
      .toBeFalsy();
    expect(linkedList1.toString())
      .toBe('1,2,3,4,5,6,7,8,9');
  });

  it('get item', () => {
    const linkedList = new DoubleLinkedList();

    expect(linkedList.get(0))
      .toBeNull();
    linkedList.fromArray([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
    ]);
    expect(linkedList.get(3).value)
      .toBe(4);
    expect(linkedList.get(-2).value)
      .toBe(10);
    expect(linkedList.get(-12))
      .toBeNull();
    expect(linkedList.get(12))
      .toBeNull();
  });

  it('insert item', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.fromArray([
      1,
      2,
      3,
    ]);

    linkedList.insert(0, -10);
    expect(linkedList.toString())
      .toBe('0,1,2,3');
    expect(linkedList.size)
      .toBe(4);
    expect(hasCircle(linkedList))
      .toBeFalsy();

    linkedList.insert(4, 10);
    expect(linkedList.toString())
      .toBe('0,1,2,3,4');
    expect(hasCircle(linkedList))
      .toBeFalsy();

    linkedList.insert(10, 2);
    expect(linkedList.toString())
      .toBe('0,1,10,2,3,4');

    expect(hasCircle(linkedList))
      .toBeFalsy();
  });

  it('deleteIndex', () => {
    const linkedList = new DoubleLinkedList();
    expect(linkedList.deleteIndex(0))
      .toBeNull();
    expect(linkedList.deleteIndex(-10))
      .toBeNull();

    linkedList.fromArray([
      1,
      2,
      3,
    ]);
    expect(linkedList.deleteIndex(10))
      .toBeNull();
    expect(linkedList.deleteIndex(-2).value)
      .toBe(2);
    expect(linkedList.size)
      .toBe(2);
    expect(linkedList.head.next.value)
      .toBe(3);
    expect(linkedList.tail.previous.value)
      .toBe(1);
    expect(linkedList.deleteIndex(1).value)
      .toBe(3);
    expect(linkedList.deleteIndex(0).value)
      .toBe(1);
  });

  it('sort number', () => {
    const linkedList = new DoubleLinkedList();
    linkedList.sort();
    expect(linkedList.head)
      .toBeNull();
    expect(linkedList.tail)
      .toBeNull();

    linkedList.append(10);
    linkedList.append(5);
    linkedList.append(15);
    linkedList.append(0);
    linkedList.append(25);

    linkedList.sort();
    expect(linkedList.head.value)
      .toBe(0);
    expect(linkedList.tail.value)
      .toBe(25);
  });
});