import type { interfaces } from '../../../types';

export function find<T = unknown>(root: interfaces.BinarySearchTreeNode<T> | null, value: T, comparator: interfaces.Comparator<T>): interfaces.BinarySearchTreeNode<T> | null {
  if (root == null) {
    return null;
  }

  if (comparator.equal(value, root.value)) {
    return root;
  } else if (comparator.lessThan(value, root.value)) {
    return find(root.left, value, comparator);
  } else {
    return find(root.right, value, comparator);
  }
}
