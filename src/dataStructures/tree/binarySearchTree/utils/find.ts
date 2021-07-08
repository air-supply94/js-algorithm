import { Comparator } from '../../../../utils';
import { BinarySearchTreeNode } from '../binarySearchTree';

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
  } else if (root.left && comparator.lessThan(value, root.value)) {
    return find<T>(root.left, value, comparator);
  } else if (root.right && comparator.greaterThan(value, root.value)) {
    return find<T>(root.right, value, comparator);
  } else {
    return null;
  }
}
