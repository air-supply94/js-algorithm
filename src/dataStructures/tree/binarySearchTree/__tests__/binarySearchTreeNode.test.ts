import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { getBalanceFactor, getHeight, getUncle } from '../utils';

describe('BinarySearchTreeNode', () => {
  test('should create node', () => {
    const node = new BinarySearchTreeNode();

    expect(node)
      .toBeDefined();

    expect(node.value)
      .toBeNull();
    expect(node.left)
      .toBeNull();
    expect(node.right)
      .toBeNull();

    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.value)
      .toBe(2);
    expect(rootNode.left.value)
      .toBe(1);
    expect(rootNode.right.value)
      .toBe(3);
  });

  test('should set parent', () => {
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);
    expect(rightNode.removeChild(leftNode))
      .toBeFalsy();

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.parent)
      .toBeNull();
    expect(rootNode.left.parent.value)
      .toBe(2);
    expect(rootNode.right.parent.value)
      .toBe(2);
    expect(rootNode.right.parent)
      .toEqual(rootNode);
  });

  test('should remove child node', () => {
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.toString())
      .toBe('1,2,3');

    expect(rootNode.removeChild(rootNode.left))
      .toBe(true);
    expect(rootNode.toString())
      .toBe('2,3');

    expect(rootNode.removeChild(rootNode.right))
      .toBe(true);
    expect(rootNode.toString())
      .toEqual('2');

    expect(rootNode.removeChild(rootNode.right))
      .toBe(false);
    expect(rootNode.toString())
      .toBe('2');
  });

  test('should replace child node', () => {
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);

    rootNode
      .setLeft(leftNode)
      .setRight(rightNode);

    expect(rootNode.toString())
      .toBe('1,2,3');

    const replacementNode = new BinarySearchTreeNode(5);
    rightNode.setRight(replacementNode);

    expect(rootNode.toString())
      .toEqual('1,2,3,5');

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right))
      .toBe(true);
    expect(rootNode.right.value)
      .toBe(5);
    expect(rootNode.right.right)
      .toBeNull();
    expect(rootNode.toString())
      .toBe('1,2,5');

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right))
      .toBe(false);
    expect(rootNode.toString())
      .toBe('1,2,5');

    expect(rootNode.replaceChild(rootNode.right, replacementNode))
      .toBe(true);
    expect(rootNode.toString())
      .toBe('1,2,5');

    expect(rootNode.replaceChild(rootNode.left, replacementNode))
      .toBe(true);
    expect(rootNode.toString())
      .toBe('5,2,5');

    expect(rootNode.replaceChild(new BinarySearchTreeNode(), new BinarySearchTreeNode()))
      .toBe(false);
  });

  test('should calculate node height', () => {
    const root = new BinarySearchTreeNode(1);
    const left = new BinarySearchTreeNode(3);
    const right = new BinarySearchTreeNode(2);
    const grandLeft = new BinarySearchTreeNode(5);
    const grandRight = new BinarySearchTreeNode(6);
    const grandGrandLeft = new BinarySearchTreeNode(7);

    expect(getHeight(root))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(0);

    root
      .setLeft(left)
      .setRight(right);

    expect(getHeight(root))
      .toBe(1);
    expect(getHeight(left))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(0);

    left
      .setLeft(grandLeft)
      .setRight(grandRight);

    expect(getHeight(root))
      .toBe(2);
    expect(getHeight(left))
      .toBe(1);
    expect(getHeight(grandLeft))
      .toBe(0);
    expect(getHeight(grandRight))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(1);

    grandLeft.setLeft(grandGrandLeft);

    expect(getHeight(root))
      .toBe(3);
    expect(getHeight(left))
      .toBe(2);
    expect(getHeight(grandLeft))
      .toBe(1);
    expect(getHeight(grandRight))
      .toBe(0);
    expect(getHeight(grandGrandLeft))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(2);
  });

  test('should calculate node height for right nodes as well', () => {
    const root = new BinarySearchTreeNode(1);
    const right = new BinarySearchTreeNode(2);

    root.setRight(right);

    expect(getHeight(root))
      .toBe(1);
    expect(getHeight(right))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(-1);
  });

  test('should set null for left and right node', () => {
    const root = new BinarySearchTreeNode(2);
    const left = new BinarySearchTreeNode(1);
    const right = new BinarySearchTreeNode(3);

    root.setLeft(left);
    root.setRight(right);

    expect(root.left.value)
      .toBe(1);
    expect(root.right.value)
      .toBe(3);

    root.setLeft(null);
    root.setRight(null);

    expect(root.left)
      .toBeNull();
    expect(root.right)
      .toBeNull();
  });

  test('should be possible to create node with object as a value', () => {
    const obj1 = {
      key: 'object_1',
      toString: () => 'object_1',
    };
    const obj2 = { key: 'object_2' };

    const node1 = new BinarySearchTreeNode(obj1);
    const node2 = new BinarySearchTreeNode(obj2);

    node1.setLeft(node2);

    expect(node1.value)
      .toEqual(obj1);
    expect(node2.value)
      .toEqual(obj2);
    expect(node1.left.value)
      .toEqual(obj2);

    node1.removeChild(node2);

    expect(node1.value)
      .toEqual(obj1);
    expect(node2.value)
      .toEqual(obj2);
    expect(node1.left)
      .toBeNull();

    expect(node1.toString())
      .toBe('object_1');
    expect(node2.toString())
      .toBe('[object Object]');
  });

  test('should detect right uncle', () => {
    const grandParent = new BinarySearchTreeNode('grand-parent');
    const parent = new BinarySearchTreeNode('parent');
    const uncle = new BinarySearchTreeNode('uncle');
    const child = new BinarySearchTreeNode('child');

    expect(getUncle(null))
      .toBeNull();
    expect(getUncle(grandParent))
      .toBeNull();
    expect(getUncle(parent))
      .toBeNull();

    grandParent.setLeft(parent);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeNull();

    parent.setLeft(child);

    expect(getUncle(child))
      .toBeNull();

    grandParent.setRight(uncle);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeDefined();
    expect(getUncle(child))
      .toEqual(uncle);
  });

  test('should detect left uncle', () => {
    const grandParent = new BinarySearchTreeNode('grand-parent');
    const parent = new BinarySearchTreeNode('parent');
    const uncle = new BinarySearchTreeNode('uncle');
    const child = new BinarySearchTreeNode('child');

    expect(getUncle(grandParent))
      .toBeNull();
    expect(getUncle(parent))
      .toBeNull();

    grandParent.setRight(parent);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeNull();

    parent.setRight(child);

    expect(getUncle(child))
      .toBeNull();

    grandParent.setLeft(uncle);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeDefined();
    expect(getUncle(child))
      .toEqual(uncle);
  });

  test('should be possible to set node values', () => {
    const node = new BinarySearchTreeNode('initial_value');

    expect(node.value)
      .toBe('initial_value');

    node.setValue('new_value');

    expect(node.value)
      .toBe('new_value');
  });

  test('should be possible to copy node', () => {
    const root = new BinarySearchTreeNode('root');
    const left = new BinarySearchTreeNode('left');
    const right = new BinarySearchTreeNode('right');

    root
      .setLeft(left)
      .setRight(right);

    expect(root.toString())
      .toBe('left,root,right');

    const newRoot = new BinarySearchTreeNode('new_root');
    const newLeft = new BinarySearchTreeNode('new_left');
    const newRight = new BinarySearchTreeNode('new_right');

    newRoot
      .setLeft(newLeft)
      .setRight(newRight);

    expect(newRoot.toString())
      .toBe('new_left,new_root,new_right');

    newRoot.setValue(root.value)
      .setLeft(root.left)
      .setRight(root.right);

    expect(root.toString())
      .toBe('left,root,right');
    expect(root.toString())
      .toBe('left,root,right');
  });

  test('should create binary search tree', () => {
    const bstNode = new BinarySearchTreeNode(2);

    expect(bstNode.value)
      .toBe(2);
    expect(bstNode.left)
      .toBeNull();
    expect(bstNode.right)
      .toBeNull();
  });
});
