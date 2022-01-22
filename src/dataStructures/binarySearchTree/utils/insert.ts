import type { Comparator } from '../../../utils';
import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from './nodeOperate';

export function insert<T = unknown>(
  root: null | BinarySearchTreeNode<T>,
  value: T,
  comparator: Comparator,
  emptyRootCallback?: (root: BinarySearchTreeNode<T> | null) => unknown
): BinarySearchTreeNode<T> | null {
  if (!root) {
    const newNode = new BinarySearchTreeNode<T>(value);
    if (typeof emptyRootCallback === 'function') {
      emptyRootCallback(newNode);
    }
    return newNode;
  }

  if (comparator.lessThan(value, root.value)) {
    if (root.left) {
      return insert<T>(root.left, value, comparator);
    } else {
      const newNode = new BinarySearchTreeNode<T>(value);
      setLeft(root, newNode);
      return newNode;
    }
  } else if (comparator.greaterThan(value, root.value)) {
    if (root.right) {
      return insert<T>(root.right, value, comparator);
    } else {
      const newNode = new BinarySearchTreeNode<T>(value);
      setRight(root, newNode);
      return newNode;
    }
  } else {
    return null;
  }
}
