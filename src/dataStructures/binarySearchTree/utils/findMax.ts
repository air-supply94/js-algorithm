import type { interfaces } from '../../../types';

export function findMax<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
): interfaces.BinarySearchTreeNode<T> | null {
  if (root == null) {
    return null;
  }

  if (root.right == null) {
    return root;
  }

  return findMax(root.right);
}
