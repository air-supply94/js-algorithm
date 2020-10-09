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

  for (let i = 1; i < preorder.length; i++) {
    if (stack.peek().value != inorder[inorderIndex]) {
      stack.peek().setLeft(new BinarySearchTreeNode<T>(preorder[i]));
      stack.push(stack.peek().left);
    } else {
      let node = stack.peek();
      while (!stack.isEmpty() && stack.peek().value == inorder[inorderIndex]) {
        node = stack.pop();
        inorderIndex++;
      }
      node.setRight(new BinarySearchTreeNode<T>(preorder[i]));
      stack.push(node.right);
    }
  }
  return root;
}

/*
export function build<T = unknown>(preorder: T[], inorder: T[]): BinarySearchTreeNodeInterface<T> | null {
  let pre = 0;
  let i = 0;

  function build(stop?: T): BinarySearchTreeNodeInterface<T> | null {
    if (inorder[i] != stop) {
      const root = new BinarySearchTreeNode<T>(preorder[pre]);
      pre++;
      root.setLeft(build(root.value));
      i++;
      root.setRight(build(stop));
      return root;
    }
    return null;
  }

  return build(undefined);
}
*/
