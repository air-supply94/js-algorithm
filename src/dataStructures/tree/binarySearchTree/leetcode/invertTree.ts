import { BinarySearchTreeNodeInterface } from '../types';

export function invertTree<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): BinarySearchTreeNodeInterface<T> | null {
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
