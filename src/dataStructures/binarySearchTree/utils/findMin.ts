import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMin<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (root == null) {
    return null;
  }

  if (root.left == null) {
    return root;
  }

  return findMin(root.left);
}
