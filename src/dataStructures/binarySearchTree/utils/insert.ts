import type { interfaces } from '../../../types';
import { BinarySearchTreeNode } from '../binarySearchTree';

export function insert<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
  value: T,
  comparator: interfaces.Comparator<T>,
  emptyRootCallback?: (root: interfaces.BinarySearchTreeNode<T> | null) => unknown,
): interfaces.BinarySearchTreeNode<T> | null {
  if (root == null) {
    const newNode = new BinarySearchTreeNode(value);
    if (typeof emptyRootCallback === 'function') {
      emptyRootCallback(newNode);
    }
    return newNode;
  }

  if (comparator.lessThan(value, root.value)) {
    if (root.left) {
      return insert(root.left, value, comparator);
    } else {
      const newNode = new BinarySearchTreeNode(value);
      root.left = newNode;
      newNode.parent = root;
      return newNode;
    }
  } else if (comparator.greaterThan(value, root.value)) {
    if (root.right) {
      return insert(root.right, value, comparator);
    } else {
      const newNode = new BinarySearchTreeNode(value);
      root.right = newNode;
      newNode.parent = root;
      return newNode;
    }
  } else {
    return null;
  }
}
