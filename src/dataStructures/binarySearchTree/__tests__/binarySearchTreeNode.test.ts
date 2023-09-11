import { BinarySearchTreeNode } from '../binarySearchTree';
import { getBalanceFactor, getHeight, getUncle, nodeToString, removeChild, replaceChild, setLeft, setRight } from '../utils';
import { expect, test, describe } from 'vitest';

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

    setLeft(rootNode, leftNode);
    setRight(rootNode, rightNode);

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
    expect(removeChild(rightNode, leftNode))
      .toBeFalsy();

    setLeft(rootNode, leftNode);
    setRight(rootNode, rightNode);

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

    setLeft(rootNode, leftNode);
    setRight(rootNode, rightNode);

    expect(nodeToString(rootNode))
      .toBe('1,2,3');

    expect(removeChild(rootNode, rootNode.left))
      .toBe(true);
    expect(nodeToString(rootNode))
      .toBe('2,3');

    expect(removeChild(rootNode, rootNode.right))
      .toBe(true);
    expect(nodeToString(rootNode))
      .toEqual('2');

    expect(removeChild(rootNode, rootNode.right))
      .toBe(false);
    expect(nodeToString(rootNode))
      .toBe('2');
  });

  test('should replace child node', () => {
    const leftNode = new BinarySearchTreeNode(1);
    const rightNode = new BinarySearchTreeNode(3);
    const rootNode = new BinarySearchTreeNode(2);

    setLeft(rootNode, leftNode);
    setRight(rootNode, rightNode);

    expect(nodeToString(rootNode))
      .toBe('1,2,3');

    const replacementNode = new BinarySearchTreeNode(5);
    setRight(rightNode, replacementNode);

    expect(nodeToString(rootNode))
      .toEqual('1,2,3,5');

    expect(replaceChild(rootNode, rootNode.right, rootNode.right.right))
      .toBe(true);
    expect(rootNode.right.value)
      .toBe(5);
    expect(rootNode.right.right)
      .toBeNull();
    expect(nodeToString(rootNode))
      .toBe('1,2,5');

    expect(replaceChild(rootNode, rootNode.right, rootNode.right.right))
      .toBe(false);
    expect(nodeToString(rootNode))
      .toBe('1,2,5');

    expect(replaceChild(rootNode, rootNode.right, replacementNode))
      .toBe(true);
    expect(nodeToString(rootNode))
      .toBe('1,2,5');

    expect(replaceChild(rootNode, rootNode.left, replacementNode))
      .toBe(true);
    expect(nodeToString(rootNode))
      .toBe('5,2,5');

    expect(replaceChild(rootNode, new BinarySearchTreeNode(), new BinarySearchTreeNode()))
      .toBe(false);
  });

  test('should calculate node height', () => {
    const root = new BinarySearchTreeNode(1);
    expect(getHeight(null))
      .toBe(0);

    const left = new BinarySearchTreeNode(3);
    const right = new BinarySearchTreeNode(2);
    const grandLeft = new BinarySearchTreeNode(5);
    const grandRight = new BinarySearchTreeNode(6);
    const grandGrandLeft = new BinarySearchTreeNode(7);

    expect(getHeight(root))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(0);

    setLeft(root, left);
    setRight(root, right);

    expect(getHeight(root))
      .toBe(1);
    expect(getHeight(left))
      .toBe(0);
    expect(getBalanceFactor(root))
      .toBe(0);

    setLeft(left, grandLeft);
    setRight(left, grandRight);

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

    setLeft(grandLeft, grandGrandLeft);

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

    setRight(root, right);

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

    setLeft(root, left);
    setRight(root, right);

    expect(root.left.value)
      .toBe(1);
    expect(root.right.value)
      .toBe(3);

    setLeft(root, null);
    setRight(root, null);

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

    setLeft(node1, node2);

    expect(node1.value)
      .toEqual(obj1);
    expect(node2.value)
      .toEqual(obj2);
    expect(node1.left.value)
      .toEqual(obj2);

    removeChild(node1, node2);

    expect(node1.value)
      .toEqual(obj1);
    expect(node2.value)
      .toEqual(obj2);
    expect(node1.left)
      .toBeNull();

    expect(nodeToString(node1))
      .toBe('object_1');
    expect(nodeToString(node2))
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

    setLeft(grandParent, parent);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeNull();

    setLeft(parent, child);

    expect(getUncle(child))
      .toBeNull();

    setRight(grandParent, uncle);

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

    setRight(grandParent, parent);

    expect(getUncle(parent))
      .toBeNull();
    expect(getUncle(child))
      .toBeNull();

    setRight(parent, child);

    expect(getUncle(child))
      .toBeNull();

    setLeft(grandParent, uncle);

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

    node.value = 'new_value';

    expect(node.value)
      .toBe('new_value');
  });

  test('should be possible to copy node', () => {
    const root = new BinarySearchTreeNode('root');
    const left = new BinarySearchTreeNode('left');
    const right = new BinarySearchTreeNode('right');

    setLeft(root, left);
    setRight(root, right);

    expect(nodeToString(root))
      .toBe('left,root,right');

    const newRoot = new BinarySearchTreeNode('new_root');
    const newLeft = new BinarySearchTreeNode('new_left');
    const newRight = new BinarySearchTreeNode('new_right');

    setLeft(newRoot, newLeft);
    setRight(newRoot, newRight);

    expect(nodeToString(newRoot))
      .toBe('new_left,new_root,new_right');

    newRoot.value = root.value;
    newRoot.left = root.left;
    newRoot.right = root.right;

    expect(nodeToString(root))
      .toBe('left,root,right');
    expect(nodeToString(root))
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
