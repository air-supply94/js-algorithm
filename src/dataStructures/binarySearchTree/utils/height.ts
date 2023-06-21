import type { interfaces } from '../../../types';

function getLeftHeight(root: interfaces.BinarySearchTreeNode): number {
  if (root == null || root.left == null) {
    return 0;
  }

  return getHeight(root.left) + 1;
}

function getRightHeight(root: interfaces.BinarySearchTreeNode): number {
  if (root == null || root.right == null) {
    return 0;
  }

  return getHeight(root.right) + 1;
}

export function getHeight(root: interfaces.BinarySearchTreeNode): number {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 0;
  }

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

export function getBalanceFactor(root: interfaces.BinarySearchTreeNode): number {
  return getLeftHeight(root) - getRightHeight(root);
}
