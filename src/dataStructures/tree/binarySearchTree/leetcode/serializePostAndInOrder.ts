import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePostAndInOrder<T = unknown>(postorder: T[], inorder: T[]): BinarySearchTreeNodeInterface<T> | null {
  return recursion(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1);
}

function recursion<T = unknown>(postorder: T[], postStartIndex: number, postEndIndex: number, inorder: T[], inStartIndex: number, inEndIndex: number) {
  if (postStartIndex > postEndIndex) {
    return null;
  }

  const rootValue = postorder[postEndIndex];
  const equalIndex = inorder.findIndex((item) => item === rootValue, inStartIndex);
  const size = equalIndex - inStartIndex + 1;
  const root = new BinarySearchTreeNode<T>(rootValue);
  root.setLeft(recursion(postorder, postStartIndex, postStartIndex + size - 2, inorder, inStartIndex, equalIndex - 1));
  root.setRight(recursion(postorder, postStartIndex + size - 1, postEndIndex - 1, inorder, equalIndex + 1, inEndIndex));
  return root;
}
