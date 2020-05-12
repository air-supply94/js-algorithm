import { RedBlackTree } from '../redBlackTree';

function redBlackTreeCompare(a, b) {
  if (a.value === b.value) {
    return 0;
  }

  return a.value < b.value ? -1 : 1;
}

describe('RedBlackTree', () => {
  it('should always color first inserted node as black', () => {
    const tree = new RedBlackTree(redBlackTreeCompare);

    const firstInsertedNode = tree.insert(10);
    tree.insert(10);
    firstInsertedNode.value.setValue(20);
    expect(firstInsertedNode.value.isBlack)
    .toBe(true);
    expect(firstInsertedNode.value.isRed)
    .toBe(false);
    expect(tree.contains(20))
    .toBeTruthy();
    expect(firstInsertedNode.toString())
    .toBe('20');
    expect(tree.comparator)
    .toBeDefined();
    expect(tree.root.height)
    .toBe(0);
  });

  it('should always color new leaf node as red', () => {
    const tree = new RedBlackTree(redBlackTreeCompare);

    const firstInsertedNode = tree.insert(10);
    const secondInsertedNode = tree.insert(15);
    const thirdInsertedNode = tree.insert(5);

    expect(tree.traverseInOrder()
    .toString())
    .toBe('5,10,15');
    expect(tree.traverseLevelOrder()
    .toString())
    .toBe('10,5,15');
    expect(tree.traversePreOrder()
    .toString())
    .toBe('10,5,15');
    expect(tree.traverseAfterOrder()
    .toString())
    .toBe('5,15,10');

    expect(firstInsertedNode.value.isBlack)
    .toBe(true);
    expect(secondInsertedNode.value.isRed)
    .toBe(true);
    expect(thirdInsertedNode.value.isRed)
    .toBe(true);

    expect(tree.toString())
    .toBe('5,10,15');
    expect(tree.root.height)
    .toBe(1);
  });

  it('should balance itself', () => {
    const tree = new RedBlackTree(redBlackTreeCompare);

    tree.insert(5);
    tree.insert(10);
    tree.insert(15);
    tree.insert(20);
    tree.insert(25);
    tree.insert(30);

    expect(tree.toString())
    .toBe('5,10,15,20,25,30');
    expect(tree.root.height)
    .toBe(3);
  });

  it('should balance itself when parent is black', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    tree.insert(10);
    expect(node1.value.isBlack)
    .toBe(true);

    const node2 = tree.insert(-10);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);

    const node3 = tree.insert(20);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);
    expect(node3.value.isRed)
    .toBe(true);

    const node4 = tree.insert(-20);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);

    const node5 = tree.insert(25);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);

    const node6 = tree.insert(6);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);

    expect(tree.toString())
    .toBe('-20,-10,6,10,20,25');
    expect(tree.root.height)
    .toBe(2);

    const node7 = tree.insert(4);

    expect(tree.root.left.value)
    .toEqual(node2.value);

    expect(tree.toString())
    .toBe('-20,-10,4,6,10,20,25');
    expect(tree.root.height)
    .toBe(3);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isBlack)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);
    expect(node6.value.isBlack)
    .toBe(true);
    expect(node7.value.isRed)
    .toBe(true);
  });

  it('should balance itself when uncle is red', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    const node2 = tree.insert(-10);
    const node3 = tree.insert(20);
    const node4 = tree.insert(-20);
    const node5 = tree.insert(6);
    const node6 = tree.insert(15);
    const node7 = tree.insert(25);
    const node8 = tree.insert(2);
    const node9 = tree.insert(8);

    expect(tree.toString())
    .toBe('-20,-10,2,6,8,10,15,20,25');
    expect(tree.root.height)
    .toBe(3);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isBlack)
    .toBe(true);
    expect(node5.value.isBlack)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);
    expect(node7.value.isRed)
    .toBe(true);
    expect(node8.value.isRed)
    .toBe(true);
    expect(node9.value.isRed)
    .toBe(true);

    const node10 = tree.insert(4);

    expect(tree.toString())
    .toBe('-20,-10,2,4,6,8,10,15,20,25');
    expect(tree.root.height)
    .toBe(3);

    expect(tree.root.value)
    .toBe(node5.value);

    expect(node5.value.isBlack)
    .toBe(true);
    expect(node1.value.isRed)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);
    expect(node10.value.isRed)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);
    expect(node7.value.isRed)
    .toBe(true);
    expect(node4.value.isBlack)
    .toBe(true);
    expect(node8.value.isBlack)
    .toBe(true);
    expect(node9.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);

    expect(tree.findMin().value.value)
    .toBe(-20);
    expect(tree.findMax().value.value)
    .toBe(25);
    expect(tree.remove(25).value.value)
    .toBe(25);
  });

  it('should do left-left rotation', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    const node2 = tree.insert(-10);
    const node3 = tree.insert(20);
    const node4 = tree.insert(7);
    const node5 = tree.insert(15);

    expect(tree.toString())
    .toBe('-10,7,10,15,20');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);

    const node6 = tree.insert(13);
    expect(tree.toString())
    .toBe('-10,7,10,13,15,20');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node5.value.isBlack)
    .toBe(true);
    expect(node3.value.isRed)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);
  });

  it('should do left-right rotation', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    const node2 = tree.insert(-10);
    const node3 = tree.insert(20);
    const node4 = tree.insert(7);
    const node5 = tree.insert(15);

    expect(tree.toString())
    .toBe('-10,7,10,15,20');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);

    const node6 = tree.insert(17);
    expect(tree.toString())
    .toBe('-10,7,10,15,17,20');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node6.value.isBlack)
    .toBe(true);
    expect(node3.value.isRed)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);
  });

  it('should do recoloring, left-left and left-right rotation', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    const node2 = tree.insert(-10);
    const node3 = tree.insert(20);
    const node4 = tree.insert(-20);
    const node5 = tree.insert(6);
    const node6 = tree.insert(15);
    const node7 = tree.insert(30);
    const node8 = tree.insert(1);
    const node9 = tree.insert(9);

    expect(tree.toString())
    .toBe('-20,-10,1,6,9,10,15,20,30');
    expect(tree.root.height)
    .toBe(3);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isRed)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isBlack)
    .toBe(true);
    expect(node5.value.isBlack)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);
    expect(node7.value.isRed)
    .toBe(true);
    expect(node8.value.isRed)
    .toBe(true);
    expect(node9.value.isRed)
    .toBe(true);

    tree.insert(4);

    expect(tree.toString())
    .toBe('-20,-10,1,4,6,9,10,15,20,30');
    expect(tree.root.height)
    .toBe(3);
  });

  it('should do right-left rotation', () => {
    const tree = new RedBlackTree();

    const node1 = tree.insert(10);
    const node2 = tree.insert(-10);
    const node3 = tree.insert(20);
    const node4 = tree.insert(-20);
    const node5 = tree.insert(6);
    const node6 = tree.insert(30);

    expect(tree.toString())
    .toBe('-20,-10,6,10,20,30');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node3.value.isBlack)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);

    const node7 = tree.insert(25);

    const rightNode = tree.root.right;
    const rightLeftNode = rightNode.left;
    const rightRightNode = rightNode.right;

    expect(rightNode.value)
    .toBe(node7.value);
    expect(rightLeftNode.value)
    .toBe(node3.value);
    expect(rightRightNode.value)
    .toBe(node6.value);

    expect(tree.toString())
    .toBe('-20,-10,6,10,20,25,30');
    expect(tree.root.height)
    .toBe(2);

    expect(node1.value.isBlack)
    .toBe(true);
    expect(node2.value.isBlack)
    .toBe(true);
    expect(node7.value.isBlack)
    .toBe(true);
    expect(node3.value.isRed)
    .toBe(true);
    expect(node4.value.isRed)
    .toBe(true);
    expect(node5.value.isRed)
    .toBe(true);
    expect(node6.value.isRed)
    .toBe(true);
  });

  it('should do left-left rotation with left grand-parent', () => {
    const tree = new RedBlackTree();

    tree.insert(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(10);
    tree.insert(5);

    expect(tree.toString())
    .toBe('5,10,15,20,25');
    expect(tree.root.height)
    .toBe(2);
  });

  it('should do right-right rotation with left grand-parent', () => {
    const tree = new RedBlackTree();

    tree.insert(20);
    tree.insert(15);
    tree.insert(25);
    tree.insert(17);
    tree.insert(19);

    expect(tree.toString())
    .toBe('15,17,19,20,25');
    expect(tree.root.height)
    .toBe(2);
  });
});
