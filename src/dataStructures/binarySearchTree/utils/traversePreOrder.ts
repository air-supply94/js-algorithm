import type { interfaces } from '../../../types';

// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 144
// 简单改造
export function traversePreOrder<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
  callback: interfaces.BinarySearchTreeTraverseCallback<T>
): void {
  const nodeStack: Array<interfaces.BinarySearchTreeNode<T>> = [];
  if (root) {
    nodeStack.push(root);
  }

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();
    if (callback(currentNode) === false) {
      return;
    }

    if (currentNode.right) {
      nodeStack.push(currentNode.right);
    }

    if (currentNode.left) {
      nodeStack.push(currentNode.left);
    }
  }
}
