import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMax<T = unknown>(root: null | BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
  if (root == null) {
    return null;
  }

  if (root.right == null) {
    return root;
  }

  return findMax<T>(root.right);
}
