import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 94
// 简单改造
export function traverseInOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack: Array<BinarySearchTreeNode<T>> = [];
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
