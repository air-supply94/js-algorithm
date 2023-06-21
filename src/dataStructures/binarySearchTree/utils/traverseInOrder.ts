import type { interfaces } from '../../../types';

// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 94
// 简单改造
export function traverseInOrder<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
  callback: interfaces.BinarySearchTreeTraverseCallback<T>
): void {
  const nodeStack: Array<interfaces.BinarySearchTreeNode<T>> = [];
  let currentInStackNode = root;

  while (nodeStack.length > 0 || currentInStackNode) {
    while (currentInStackNode) {
      nodeStack.push(currentInStackNode);
      currentInStackNode = currentInStackNode.left;
    }

    const tmpNode = nodeStack.pop();
    if (callback(tmpNode) === false) {
      return;
    }
    currentInStackNode = tmpNode.right;
  }
}
