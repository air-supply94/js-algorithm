import { Comparator } from '@/utils';
import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function insert<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  emptyRootCallback?: (root: BinarySearchTreeNodeInterface<T> | null) => unknown
): BinarySearchTreeNodeInterface<T> | null {
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
    }

    const newNode = new BinarySearchTreeNode<T>(value);
    root.setLeft(newNode);

    return newNode;
  }

  if (comparator.greaterThan(value, root.value)) {
    if (root.right) {
      return insert<T>(root.right, value, comparator);
    }

    const newNode = new BinarySearchTreeNode<T>(value);
    root.setRight(newNode);

    return newNode;
  }

  return null;
}
