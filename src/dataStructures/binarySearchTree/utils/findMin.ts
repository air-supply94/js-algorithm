import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMin<T = unknown>(root: null | BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
  if (root == null) {
    return null;
  }

  if (root.left == null) {
    return root;
  }

  return findMin<T>(root.left);
}
