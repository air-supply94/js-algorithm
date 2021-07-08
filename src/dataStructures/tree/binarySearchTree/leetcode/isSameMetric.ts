import { BinarySearchTreeNode } from '../binarySearchTree';

export function isSameMetric<T = unknown>(root: BinarySearchTreeNode<T> | null): boolean {
  if (!root) {
    return true;
  }

  return isSameLeftAndRight<T>(root.left, root.right);
}

export function isSameLeftAndRight<T = unknown>(left: BinarySearchTreeNode<T> | null, right: BinarySearchTreeNode<T> | null): boolean {
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
