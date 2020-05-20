import { RedBlackTree } from '../redBlackTree';
import { getHeight } from '../../binarySearchTree/utils';
import { RedBlackTreeNodeInterface } from '../types';

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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
    .toBe(2);

    const node7 = tree.insert(4);

    expect(tree.root.left.value)
    .toEqual(node2.value);

    expect(tree.toString())
    .toBe('-20,-10,4,6,10,20,25');
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
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
    expect(getHeight(tree.root))
    .toBe(2);
  });

  it('should insert and remove object item', () => {
    function compare(a, b) {
      if (a.value.key === b.value.key) {
        return 0;
      }

      return a.value.key < b.value.key ? -1 : 1;
    }

    const tree = new RedBlackTree<{ key: string; value: number }>(compare);

    const data = [
      {
        key: 'a',
        value: 1,
        toString() {
          return `${this.key}-${this.value}`;
        },
      },
      {
        key: 'b',
        value: 2,
        toString() {
          return `${this.key}-${this.value}`;
        },
      },
      {
        key: 'c',
        value: 3,
        toString() {
          return `${this.key}-${this.value}`;
        },
      },
      {
        key: 'd',
        value: 4,
        toString() {
          return `${this.key}-${this.value}`;
        },
      },
    ];

    expect(treeUtils(tree).color)
    .toBe('');
    expect(treeUtils(tree).value)
    .toBe('');

    data.forEach(item => tree.insert(item));
    expect(treeUtils(tree).color)
    .toBe('1,1,1,0');
    expect(treeUtils(tree).value)
    .toBe('b-2,a-1,c-3,d-4');

    expect(tree.remove({
      key: 'a',
      value: 10,
    }).value.value.value)
    .toBe(1);
    expect(treeUtils(tree).color)
    .toBe('1,1,1');
    expect(treeUtils(tree).value)
    .toBe('c-3,b-2,d-4');

    expect(tree.remove({
      key: 'b',
      value: 10,
    }).value.value.value)
    .toBe(2);
    expect(treeUtils(tree).color)
    .toBe('1,0');
    expect(treeUtils(tree).value)
    .toBe('c-3,d-4');

    expect(tree.remove({
      key: 'c',
      value: 10,
    }).value.value.value)
    .toBe(3);
    expect(treeUtils(tree).color)
    .toBe('1');
    expect(treeUtils(tree).value)
    .toBe('d-4');

    expect(tree.remove({
      key: 'd',
      value: 10,
    }).value.value.value)
    .toBe(4);
    expect(treeUtils(tree).color)
    .toBe('');
    expect(treeUtils(tree).value)
    .toBe('');
  });

  it('should do remove item', () => {
    const tree = new RedBlackTree<number>();

    expect(tree.remove(1))
    .toBeNull();
    expect(treeUtils(tree).color)
    .toBe('');
    expect(treeUtils(tree).value)
    .toBe('');

    tree.insert(5);
    tree.insert(4);
    tree.insert(6);
    tree.insert(3);
    tree.insert(7);

    expect(tree.remove(5).value.value)
    .toBe(5);
    expect(treeUtils(tree).color)
    .toBe('1,1,1,0');
    expect(treeUtils(tree).value)
    .toBe('4,3,6,7');

    expect(tree.remove(7).value.value)
    .toBe(7);
    expect(treeUtils(tree).color)
    .toBe('1,1,1');
    expect(treeUtils(tree).value)
    .toBe('4,3,6');

    expect(tree.remove(3).value.value)
    .toBe(3);
    expect(treeUtils(tree).color)
    .toBe('1,0');
    expect(treeUtils(tree).value)
    .toBe('4,6');

    expect(tree.remove(6).value.value)
    .toBe(6);
    expect(treeUtils(tree).color)
    .toBe('1');
    expect(treeUtils(tree).value)
    .toBe('4');

    expect(tree.remove(4).value.value)
    .toBe(4);
    expect(treeUtils(tree).color)
    .toBe('');
    expect(treeUtils(tree).value)
    .toBe('');
  });
});

function treeUtils<T = unknown>(tree: RedBlackTree<T>) {
  const items: RedBlackTreeNodeInterface<T>[] = [];
  tree.traverseLevelOrderCallback(node => {
    items.push(node.value);
  });

  return {
    color: items.map(item => item.isBlack ? 1 : 0)
    .join(','),
    value: items.map(item => item.value)
    .join(','),
  };
}
