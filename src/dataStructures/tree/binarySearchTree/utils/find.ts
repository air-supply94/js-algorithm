import type { Comparator } from '../../../../utils';
import type { BinarySearchTreeNode } from '../binarySearchTree';

export function find<T = unknown>(
  root: null | BinarySearchTreeNode<T>,
  value: T,
  comparator: Comparator
): null | BinarySearchTreeNode<T> {
  if (!root) {
    return null;
  }

  if (comparator.equal(value, root.value)) {
    return root;
  } else if (comparator.lessThan(value, root.value)) {
    return find<T>(root.left, value, comparator);
  } else {
    return find<T>(root.right, value, comparator);
  }
}
