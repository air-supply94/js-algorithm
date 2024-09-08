import type { interfaces } from '../../../types';

export function findMin<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
): interfaces.BinarySearchTreeNode<T> | null {
  if (root == null) {
    return null;
  }

  if (root.left == null) {
    return root;
  }

  return findMin(root.left);
}
