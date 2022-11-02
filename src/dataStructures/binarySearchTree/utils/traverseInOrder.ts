import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 94
// 简单改造
export function traverseInOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack: Array<BinarySearchTreeNode<T>> = [];
  let currentNode = root;

  while (nodeStack.length > 0 || currentNode) {
    while (currentNode) {
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    }

    const tmpNode = nodeStack.pop();
    if (callback(tmpNode) === false) {
      return;
    }
    currentNode = tmpNode.right;
  }
}
