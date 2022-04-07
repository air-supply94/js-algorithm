import type { BinarySearchTreeNode } from '../binarySearchTree';

function getLeftHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (root == null || root.left == null) {
    return 0;
  }

  return getHeight(root.left) + 1;
}

function getRightHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (root == null || root.right == null) {
    return 0;
  }

  return getHeight(root.right) + 1;
}

export function getHeight<T = unknown>(root: BinarySearchTreeNode<T>): number {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 0;
  }

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

export function getBalanceFactor<T = unknown>(root: BinarySearchTreeNode<T>): number {
  return getLeftHeight(root) - getRightHeight(root);
}
