import { BinarySearchTreeNodeInterface } from '../types';

function isSameLeftAndRight<T = unknown>(left: BinarySearchTreeNodeInterface<T> | null, right: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (left == null) {
    return right == null;
  }

  if (right == null) {
    return left == null;
  }

  if (left.value !== right.value) {
    return false;
  }

  return isSameLeftAndRight<T>(left.left, right.right) && isSameLeftAndRight<T>(left.right, right.left);
}

export function isSymmetric<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (!root) {
    return true;
  }

  return isSameLeftAndRight<T>(root.left, root.right);
}
