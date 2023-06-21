import type { interfaces } from '../../../types';
import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from './nodeOperate';

export function insert<T = unknown>(
  root: interfaces. BinarySearchTreeNode<T> | null,
  value: T,
  comparator: interfaces.Comparator<T>,
  emptyRootCallback?: (root: interfaces.BinarySearchTreeNode<T> | null) => unknown
): interfaces.BinarySearchTreeNode<T> | null {
  const newNode = new BinarySearchTreeNode(value);

  if (root == null) {
    if (typeof emptyRootCallback === 'function') {
      emptyRootCallback(newNode);
    }
    return newNode;
  }

  if (comparator.lessThan(value, root.value)) {
    if (root.left) {
      return insert(root.left, value, comparator);
    } else {
      setLeft(root, newNode);
      return newNode;
    }
  } else if (comparator.greaterThan(value, root.value)) {
    if (root.right) {
      return insert(root.right, value, comparator);
    } else {
      setRight(root, newNode);
      return newNode;
    }
  } else {
    return null;
  }
}
