import { Stack } from '../../../stack';
import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePreAndInOrder<T = unknown>(preorder: T[], inorder: T[]): BinarySearchTreeNodeInterface<T> | null {
  if (preorder.length == 0) {
    return null;
  }

  const root = new BinarySearchTreeNode<T>(preorder[0]);
  const stack = new Stack<BinarySearchTreeNodeInterface<T>>();
  stack.push(root);
  let inorderIndex = 0;
  let currentNode: BinarySearchTreeNodeInterface<T>;
  for (let i = 1; i < preorder.length; i++) {
    if (stack.peek().value != inorder[inorderIndex]) {
      stack.peek().setLeft(new BinarySearchTreeNode<T>(preorder[i]));
      stack.push(stack.peek().left);
    } else {
      currentNode = stack.peek();
      while (!stack.isEmpty() && stack.peek().value == inorder[inorderIndex]) {
        currentNode = stack.pop();
        inorderIndex++;
      }
      currentNode.setRight(new BinarySearchTreeNode<T>(preorder[i]));
      stack.push(currentNode.right);
    }
  }
  return root;
}
