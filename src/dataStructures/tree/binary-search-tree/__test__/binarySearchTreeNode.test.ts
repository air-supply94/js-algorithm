import { BinarySearchTreeNode } from '../binarySearchTreeNode';

describe('BinarySearchTreeNode', () => {
  it('should create node', () => {
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

  it('should set parent', () => {
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

  it('should remove child node', () => {
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

  it('should replace child node', () => {
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

  it('should calculate node height', () => {
    const root = new BinarySearchTreeNode(1);
    const left = new BinarySearchTreeNode(3);
    const right = new BinarySearchTreeNode(2);
    const grandLeft = new BinarySearchTreeNode(5);
    const grandRight = new BinarySearchTreeNode(6);
    const grandGrandLeft = new BinarySearchTreeNode(7);

    expect(root.height)
    .toBe(0);
    expect(root.balanceFactor)
    .toBe(0);

    root
    .setLeft(left)
    .setRight(right);

    expect(root.height)
    .toBe(1);
    expect(left.height)
    .toBe(0);
    expect(root.balanceFactor)
    .toBe(0);

    left
    .setLeft(grandLeft)
    .setRight(grandRight);

    expect(root.height)
    .toBe(2);
    expect(left.height)
    .toBe(1);
    expect(grandLeft.height)
    .toBe(0);
    expect(grandRight.height)
    .toBe(0);
    expect(root.balanceFactor)
    .toBe(1);

    grandLeft.setLeft(grandGrandLeft);

    expect(root.height)
    .toBe(3);
    expect(left.height)
    .toBe(2);
    expect(grandLeft.height)
    .toBe(1);
    expect(grandRight.height)
    .toBe(0);
    expect(grandGrandLeft.height)
    .toBe(0);
    expect(root.balanceFactor)
    .toBe(2);
  });

  it('should calculate node height for right nodes as well', () => {
    const root = new BinarySearchTreeNode(1);
    const right = new BinarySearchTreeNode(2);

    root.setRight(right);

    expect(root.height)
    .toBe(1);
    expect(right.height)
    .toBe(0);
    expect(root.balanceFactor)
    .toBe(-1);
  });

  it('should set null for left and right node', () => {
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

  it('should be possible to create node with object as a value', () => {
    const obj1 = {
      key: 'object_1',
      toString: () => 'object_1',
    };
    const obj2 = {key: 'object_2'};

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

  it('should detect right uncle', () => {
    const grandParent = new BinarySearchTreeNode('grand-parent');
    const parent = new BinarySearchTreeNode('parent');
    const uncle = new BinarySearchTreeNode('uncle');
    const child = new BinarySearchTreeNode('child');

    expect(grandParent.uncle)
    .toBeNull();
    expect(parent.uncle)
    .toBeNull();

    grandParent.setLeft(parent);

    expect(parent.uncle)
    .toBeNull();
    expect(child.uncle)
    .toBeNull();

    parent.setLeft(child);

    expect(child.uncle)
    .toBeNull();

    grandParent.setRight(uncle);

    expect(parent.uncle)
    .toBeNull();
    expect(child.uncle)
    .toBeDefined();
    expect(child.uncle)
    .toEqual(uncle);
  });

  it('should detect left uncle', () => {
    const grandParent = new BinarySearchTreeNode('grand-parent');
    const parent = new BinarySearchTreeNode('parent');
    const uncle = new BinarySearchTreeNode('uncle');
    const child = new BinarySearchTreeNode('child');

    expect(grandParent.uncle)
    .toBeNull();
    expect(parent.uncle)
    .toBeNull();

    grandParent.setRight(parent);

    expect(parent.uncle)
    .toBeNull();
    expect(child.uncle)
    .toBeNull();

    parent.setRight(child);

    expect(child.uncle)
    .toBeNull();

    grandParent.setLeft(uncle);

    expect(parent.uncle)
    .toBeNull();
    expect(child.uncle)
    .toBeDefined();
    expect(child.uncle)
    .toEqual(uncle);
  });

  it('should be possible to set node values', () => {
    const node = new BinarySearchTreeNode('initial_value');

    expect(node.value)
    .toBe('initial_value');

    node.setValue('new_value');

    expect(node.value)
    .toBe('new_value');
  });

  it('should be possible to copy node', () => {
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

  it('should create binary search tree', () => {
    const bstNode = new BinarySearchTreeNode(2);

    expect(bstNode.value)
    .toBe(2);
    expect(bstNode.left)
    .toBeNull();
    expect(bstNode.right)
    .toBeNull();
  });
});
