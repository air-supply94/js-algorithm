import type { Comparator } from '../../../utils';
import type { BinarySearchTreeNode } from '../binarySearchTree';

export function find<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  value: T,
  comparator: Comparator
): BinarySearchTreeNode<T> | null {
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
