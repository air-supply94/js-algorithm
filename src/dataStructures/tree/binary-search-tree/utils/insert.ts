import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { Comparator } from '../../../../utils/comparator';
import { BinarySearchTreeNodeInterface } from '../types';

export function insert<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  emptyRootCallback?: (root: BinarySearchTreeNodeInterface<T> | null) => unknown,
): BinarySearchTreeNodeInterface<T> {
  if (!root) {
    const newNode = new BinarySearchTreeNode<T>(value);
    if (typeof emptyRootCallback === 'function') {
      emptyRootCallback(newNode);
    }
    return newNode;
  }

  if (comparator.lessThan(value, root.value)) {
    if (root.left) {
      return insert(root.left, value, comparator, emptyRootCallback);
    }

    const newNode = new BinarySearchTreeNode<T>(value);
    root.setLeft(newNode);

    return newNode;
  }

  if (comparator.greaterThan(value, root.value)) {
    if (root.right) {
      return insert(root.right, value, comparator, emptyRootCallback);
    }

    const newNode = new BinarySearchTreeNode<T>(value);
    root.setRight(newNode);

    return newNode;
  }

  return null;
}
