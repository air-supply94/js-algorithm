import { BinarySearchTree, BinarySearchTreeNode } from '../binarySearchTree';
import { getHeight, insert, findReplaceNode } from '../utils';

describe('BinarySearchTree', () => {
  test('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst)
      .toBeDefined();
    expect(bst.root)
      .toBeNull();

    bst.insert(1);
    bst.insert(2);
    bst.insert(0);
    expect(findReplaceNode(bst.root, 1, bst.comparator).parent.value)
      .toBe(2);
  });

  test('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertedNode1 = bst.insert(10);
    const insertedNode2 = bst.insert(20);
    bst.insert(5);

    expect(bst.toString())
      .toBe('5,10,20');
    expect(insertedNode1.value)
      .toBe(10);
    expect(insertedNode2.value)
      .toBe(20);
  });

  test('should check if value exists', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20))
      .toBe(true);
    expect(bst.contains(40))
      .toBe(false);
  });

  test('should remove nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    const originRemove = bst.remove;
    bst.remove = function <T = unknown>(this: BinarySearchTree<T>, value: T): BinarySearchTreeNode<T> | null {
      return findReplaceNode(this.root, value, this.comparator);
    };
    expect(bst.remove(10).value)
      .toBe(10);
    expect(bst.root.value)
      .toBe(10);
    bst.remove = originRemove;

    bst.insert(20);
    bst.insert(5);

    expect(bst.toString())
      .toBe('5,10,20');

    const removed1 = bst.remove(5);
    expect(bst.toString())
      .toBe('10,20');
    expect(removed1.value)
      .toBe(5);

    const removed2 = bst.remove(20);
    expect(bst.toString())
      .toBe('10');
    expect(removed2.value)
      .toBe(20);
  });

  test('should insert object values', () => {
    const nodeValueCompareFunction = (a, b) => {
      const normalizedA = a || { value: null };
      const normalizedB = b || { value: null };

      if (normalizedA.value === normalizedB.value) {
        return 0;
      }

      return normalizedA.value < normalizedB.value ? -1 : 1;
    };

    const obj1 = {
      key: 'obj1',
      value: 1,
      toString: () => 'obj1',
    };
    const obj2 = {
      key: 'obj2',
      value: 2,
      toString: () => 'obj2',
    };
    const obj3 = {
      key: 'obj3',
      value: 3,
      toString: () => 'obj3',
    };

    const bst = new BinarySearchTree(nodeValueCompareFunction);

    bst.insert(obj2);
    bst.insert(obj3);
    bst.insert(obj1);

    expect(bst.toString())
      .toBe('obj1,obj2,obj3');
  });

  test('should be traversed to sorted array', () => {
    const bst = new BinarySearchTree();
    expect(bst.find(1))
      .toBeNull();
    expect(bst.findMin())
      .toBeNull();
    expect(bst.findMax())
      .toBeNull();
    const originInsert = bst.insert;
    bst.insert = function <T = unknown>(this: BinarySearchTree<T>, value: T): null | BinarySearchTreeNode<T> {
      return insert(this.root, value, this.comparator);
    };
    bst.insert(10);
    expect(bst.root)
      .toBeNull();

    bst.insert = originInsert;
    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);
    expect(bst.findMin().value)
      .toBe(-20);
    expect(bst.findMax().value)
      .toBe(25);

    expect(bst.toString())
      .toBe('-20,-10,6,10,20,25');
    expect(getHeight(bst.root))
      .toBe(2);

    bst.insert(4);

    expect(bst.toString())
      .toBe('-20,-10,4,6,10,20,25');
    expect(getHeight(bst.root))
      .toBe(3);
  });

  test('should insert in itself if it is empty', () => {
    const bstNode = new BinarySearchTree();
    bstNode.insert(1);

    expect(bstNode.root.value)
      .toBe(1);
    expect(bstNode.root.left)
      .toBeNull();
    expect(bstNode.root.right)
      .toBeNull();
  });

  test('should insert nodes in correct order', () => {
    const bstNode = new BinarySearchTree();
    bstNode.insert(2);
    const insertedNode1 = bstNode.insert(1);

    expect(insertedNode1.value)
      .toBe(1);
    expect(bstNode.toString())
      .toBe('1,2');
    expect(bstNode.contains(1))
      .toBe(true);
    expect(bstNode.contains(3))
      .toBe(false);

    const insertedNode2 = bstNode.insert(3);

    expect(insertedNode2.value)
      .toBe(3);
    expect(bstNode.toString())
      .toBe('1,2,3');
    expect(bstNode.contains(3))
      .toBe(true);
    expect(bstNode.contains(4))
      .toBe(false);

    bstNode.insert(7);

    expect(bstNode.toString())
      .toBe('1,2,3,7');
    expect(bstNode.contains(7))
      .toBe(true);
    expect(bstNode.contains(8))
      .toBe(false);

    bstNode.insert(4);

    expect(bstNode.toString())
      .toBe('1,2,3,4,7');
    expect(bstNode.contains(4))
      .toBe(true);
    expect(bstNode.contains(8))
      .toBe(false);

    bstNode.insert(6);

    expect(bstNode.toString())
      .toBe('1,2,3,4,6,7');
    expect(bstNode.contains(6))
      .toBe(true);
    expect(bstNode.contains(8))
      .toBe(false);
  });

  test('should not insert duplicates', () => {
    const bstNode = new BinarySearchTree();
    bstNode.insert(2);
    bstNode.insert(1);

    expect(bstNode.toString())
      .toBe('1,2');
    expect(bstNode.contains(1))
      .toBe(true);
    expect(bstNode.contains(3))
      .toBe(false);

    bstNode.insert(1);

    expect(bstNode.toString())
      .toBe('1,2');
    expect(bstNode.contains(1))
      .toBe(true);
    expect(bstNode.contains(3))
      .toBe(false);
  });

  test('should find min node', () => {
    const node = new BinarySearchTree();
    node.insert(10);
    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.findMin())
      .not
      .toBeNull();
    expect(node.findMin().value)
      .toBe(1);
  });

  test('should find node', () => {
    const node = new BinarySearchTree();
    node.insert(10);
    node.insert(20);
    node.insert(30);
    node.insert(5);
    node.insert(40);
    node.insert(1);

    expect(node.find(6))
      .toBeNull();
    expect(node.find(5))
      .not
      .toBeNull();
    expect(node.find(5).value)
      .toBe(5);
  });

  test('should remove leaf nodes', () => {
    const bstRootNode = new BinarySearchTree();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);

    expect(bstRootNode.toString())
      .toBe('5,10,20');

    const removed1 = bstRootNode.remove(5);
    expect(bstRootNode.toString())
      .toBe('10,20');
    expect(removed1.value)
      .toBe(5);

    const removed2 = bstRootNode.remove(20);
    expect(bstRootNode.toString())
      .toBe('10');
    expect(removed2.value)
      .toBe(20);
  });

  test('should remove nodes with one child', () => {
    const bstRootNode = new BinarySearchTree();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);

    expect(bstRootNode.toString())
      .toBe('5,10,20,30');

    bstRootNode.remove(20);
    expect(bstRootNode.toString())
      .toBe('5,10,30');

    bstRootNode.insert(1);
    expect(bstRootNode.toString())
      .toBe('1,5,10,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString())
      .toBe('1,10,30');
  });

  test('should remove nodes with two children', () => {
    const bstRootNode = new BinarySearchTree();

    bstRootNode.insert(10);
    bstRootNode.insert(20);
    bstRootNode.insert(5);
    bstRootNode.insert(30);
    bstRootNode.insert(15);
    bstRootNode.insert(25);

    expect(bstRootNode.toString())
      .toBe('5,10,15,20,25,30');
    expect(bstRootNode.find(20).left.value)
      .toBe(15);
    expect(bstRootNode.find(20).right.value)
      .toBe(30);

    const removeNode = bstRootNode.remove(20);
    expect(removeNode.value)
      .toBe(20);
    expect(removeNode.parent.value)
      .toBe(30);

    expect(bstRootNode.root.right.parent.value)
      .toBe(10);
    expect(bstRootNode.toString())
      .toBe('5,10,15,25,30');

    expect(bstRootNode.remove(15).parent.value)
      .toBe(25);

    expect(bstRootNode.toString())
      .toBe('5,10,25,30');

    const removeNode2 = bstRootNode.remove(10);
    expect(removeNode2.parent.value)
      .toBe(30);
    expect(bstRootNode.toString())
      .toBe('5,25,30');
    expect(bstRootNode.root.value)
      .toBe(25);

    bstRootNode.remove(25);
    expect(bstRootNode.toString())
      .toBe('5,30');

    bstRootNode.remove(5);
    expect(bstRootNode.toString())
      .toBe('30');
  });

  test('should remove node with no parent', () => {
    const bstRootNode = new BinarySearchTree();
    expect(bstRootNode.toString())
      .toBe('');

    bstRootNode.insert(1);
    bstRootNode.insert(2);
    expect(bstRootNode.toString())
      .toBe('1,2');

    bstRootNode.remove(1);
    expect(bstRootNode.toString())
      .toBe('2');

    bstRootNode.remove(2);
    expect(bstRootNode.toString())
      .toBe('');
  });

  test('should throw error when trying to remove not existing node', () => {
    const bstRootNode = new BinarySearchTree();

    bstRootNode.insert(10);
    bstRootNode.insert(20);

    expect(bstRootNode.remove(30))
      .toBeFalsy();
  });

  test('should be possible to use objects as node values', () => {
    const nodeValueComparatorCallback = (a, b) => {
      const normalizedA = a || { value: null };
      const normalizedB = b || { value: null };

      if (normalizedA.value === normalizedB.value) {
        return 0;
      }

      return normalizedA.value < normalizedB.value ? -1 : 1;
    };

    const obj1 = {
      key: 'obj1',
      value: 1,
      toString: () => 'obj1',
    };
    const obj2 = {
      key: 'obj2',
      value: 2,
      toString: () => 'obj2',
    };
    const obj3 = {
      key: 'obj3',
      value: 3,
      toString: () => 'obj3',
    };

    const bstNode = new BinarySearchTree(nodeValueComparatorCallback);
    bstNode.insert(obj2);
    bstNode.insert(obj1);

    expect(bstNode.toString())
      .toBe('obj1,obj2');
    expect(bstNode.contains(obj1))
      .toBe(true);
    expect(bstNode.contains(obj3))
      .toBe(false);

    bstNode.insert(obj3);

    expect(bstNode.toString())
      .toBe('obj1,obj2,obj3');
    expect(bstNode.contains(obj3))
      .toBe(true);

    expect(bstNode.findMin().value)
      .toEqual(obj1);
  });

  test('should traverse node', () => {
    const bst = new BinarySearchTree();
    expect(bst.traversePreOrder()
      .join())
      .toBe('');
    expect(bst.traverseInOrder()
      .join())
      .toBe('');
    expect(bst.traverseAfterOrder()
      .join())
      .toBe('');
    expect(bst.traverseLevelOrder()
      .join())
      .toBe('');

    bst.insert(4);
    bst.insert(6);
    expect(bst.traverseAfterOrder()
      .join())
      .toBe('6,4');

    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(7);
    bst.insert(5);
    let result = [];

    function callback(node) {
      if (result.length >= 3) {
        return false;
      }
      result.push(node.value);
      return true;
    }

    bst.traversePreOrderCallback(callback);
    expect(result.toString())
      .toBe('4,2,1');
    result = [];

    bst.traverseInOrderCallback(callback);
    expect(result.toString())
      .toBe('1,2,3');
    result = [];

    bst.traverseAfterOrderCallback(callback);
    expect(result.toString())
      .toBe('1,3,2');
    result = [];

    bst.traverseLevelOrderCallback(callback);
    expect(result.toString())
      .toBe('4,2,6');
    result = [];

    expect(bst.traversePreOrder()
      .join())
      .toBe('4,2,1,3,6,5,7');

    expect(bst.traverseInOrder()
      .join())
      .toBe('1,2,3,4,5,6,7');

    bst.insert(0);
    expect(bst.traverseAfterOrder()
      .join())
      .toBe('0,1,3,2,5,7,6,4');
    bst.remove(0);

    expect(bst.traverseLevelOrder()
      .join())
      .toBe('4,2,6,1,3,5,7');
  });
});
