import { BinarySearchTreeNode } from '../binarySearchTree';

export function invertTree<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (!root) {
    return null;
  }

  const tmp = root.right;
  root.setRight(root.left);
  root.setLeft(tmp);

  invertTree<T>(root.left);
  invertTree<T>(root.right);

  return root;
}
