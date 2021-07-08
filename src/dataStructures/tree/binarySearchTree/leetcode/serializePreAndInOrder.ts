import { BinarySearchTreeNode } from '../binarySearchTree';

export function serializePreAndInOrder<T = unknown>(preorder: T[], inorder: T[]): BinarySearchTreeNode<T> | null {
  return recursion(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

function recursion<T = unknown>(preorder: T[], preStartIndex: number, preEndIndex: number, inorder: T[], inStartIndex: number, inEndIndex: number) {
  if (preStartIndex > preEndIndex) {
    return null;
  }

  const equalValue = preorder[preStartIndex];
  const equalIndex = inorder.findIndex((item) => item === equalValue, inStartIndex);
  const root = new BinarySearchTreeNode<T>(equalValue);
  const size = equalIndex - inStartIndex + 1;

  root.setLeft(recursion(preorder, preStartIndex + 1, size + preStartIndex - 1, inorder, inStartIndex, equalIndex - 1));
  root.setRight(recursion(preorder, size + preStartIndex, preEndIndex, inorder, equalIndex + 1, inEndIndex));
  return root;
}
