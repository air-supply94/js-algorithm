import { BinarySearchTreeNodeInterface } from '../types';

export function getLeftHeight<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  if (!root.left) {
    return 0;
  }

  return getHeight(root.left) + 1;
}

export function getRightHeight<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  if (!root.right) {
    return 0;
  }

  return getHeight(root.right) + 1;
}

export function getHeight<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  return Math.max(getLeftHeight<T>(root), getRightHeight<T>(root));
}

export function getBalanceFactor<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  return getLeftHeight<T>(root) - getRightHeight<T>(root);
}
