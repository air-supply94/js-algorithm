import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
// 144
// 简单改造
export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack: Array<BinarySearchTreeNode<T>> = [];
  if (root) {
    nodeStack.push(root);
  }

  while (nodeStack.length) {
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
