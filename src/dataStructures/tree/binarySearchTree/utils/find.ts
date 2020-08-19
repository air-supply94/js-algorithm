import { Comparator } from '../../../../utils';
import { BinarySearchTreeNodeInterface } from '../types';

export function find<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator
): null | BinarySearchTreeNodeInterface<T> {
  if (!root) {
    return null;
  }

  if (comparator.equal(value, root.value)) {
    return root;
  }

  if (root.left && comparator.lessThan(value, root.value)) {
    return find<T>(root.left, value, comparator);
  }

  if (root.right && comparator.greaterThan(value, root.value)) {
    return find<T>(root.right, value, comparator);
  }

  return null;
}
