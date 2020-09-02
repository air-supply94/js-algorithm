import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePreAndInOrder<T = unknown>(preorder: T[], inorder: T[]): BinarySearchTreeNodeInterface<T> | null {
  let pre = 0;
  let i = 0;

  function build(stop?: T): BinarySearchTreeNodeInterface<T> | null {
    if (inorder[i] != stop) {
      const root = new BinarySearchTreeNode<T>(preorder[pre++]);
      root.setLeft(build(root.value));
      i++;
      root.setRight(build(stop));
      return root;
    }
    return null;
  }

  return build(undefined);
}
