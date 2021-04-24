import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePreAndInOrder<T = unknown>(preorder: T[], inorder: T[]): BinarySearchTreeNodeInterface<T> | null {
  return recursion(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

function recursion<T = unknown>(preorder: T[], preStartIndex: number, preEndIndex: number, inorder: T[], inStartIndex: number, inEndIndex: number) {
  if (preStartIndex > preEndIndex) {
    return null;
  }

  const rootValue = preorder[preStartIndex];
  const equalIndex = inorder.findIndex((item) => item === rootValue, inStartIndex);
  const size = equalIndex - inStartIndex;
  const root = new BinarySearchTreeNode<T>(rootValue);
  root.setLeft(recursion(preorder, preStartIndex + 1, preStartIndex + size, inorder, inStartIndex, equalIndex - 1));
  root.setRight(recursion(preorder, preStartIndex + size + 1, preEndIndex, inorder, equalIndex + 1, inEndIndex));
  return root;
}
