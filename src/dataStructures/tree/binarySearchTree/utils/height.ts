import { BinarySearchTreeNode } from '../binarySearchTree';

function getLeftHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (!root.left) {
    return 0;
  }

  return getHeight(root.left) + 1;
}

function getRightHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (!root.right) {
    return 0;
  }

  return getHeight(root.right) + 1;
}

export function getHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (!root) {
    return 0;
  }

  return Math.max(getLeftHeight(root), getRightHeight(root));
}

export function getBalanceFactor<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (!root) {
    return 0;
  }

  return getLeftHeight(root) - getRightHeight(root);
}
