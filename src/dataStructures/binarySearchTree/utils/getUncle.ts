import type { interfaces } from '../../../types';

export function getUncle<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T>,
): interfaces.BinarySearchTreeNode<T> | null {
  if (root?.parent?.parent?.left && root.parent.parent.right) {
    if (root.parent === root.parent.parent.left) {
      return root.parent.parent.right;
    } else {
      return root.parent.parent.left;
    }
  } else {
    return null;
  }
}
