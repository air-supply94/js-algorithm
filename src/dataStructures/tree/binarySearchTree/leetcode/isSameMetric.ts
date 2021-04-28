import { BinarySearchTreeNodeInterface } from '../types';

export function isSameMetric<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (!root) {
    return true;
  }

  return isSameLeftAndRight<T>(root.left, root.right);
}

export function isSameLeftAndRight<T = unknown>(left: BinarySearchTreeNodeInterface<T> | null, right: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (left == null) {
    return right == null;
  }

  if (right == null) {
    return left == null;
  }

  if (left.value !== right.value) {
    return false;
  } else {
    return isSameLeftAndRight<T>(left.left, right.right) && isSameLeftAndRight(left.right, right.left);
  }
}
