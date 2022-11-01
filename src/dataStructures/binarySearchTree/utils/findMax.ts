import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMax<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (root == null) {
    return null;
  }

  if (root.right == null) {
    return root;
  }

  return findMax(root.right);
}
