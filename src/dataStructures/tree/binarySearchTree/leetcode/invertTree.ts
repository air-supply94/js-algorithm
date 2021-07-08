import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

export function invertTree<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (!root) {
    return null;
  }

  const tmp = root.right;
  setRight(root, root.left);
  setLeft(root, tmp);

  invertTree<T>(root.left);
  invertTree<T>(root.right);

  return root;
}
