import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 102
// 简单改造
export function traverseLevelOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): number {
  const queue: Array<BinarySearchTreeNode<T>> = [];
  let level = 0;
  if (root != null) {
    queue.push(root);
  }

  while (queue.length) {
    const size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      const tmpNode = queue.shift();
      if (callback(tmpNode, level) === false) {
        return level;
      }

      if (tmpNode.left != null) {
        queue.push(tmpNode.left);
      }

      if (tmpNode.right != null) {
        queue.push(tmpNode.right);
      }
    }
  }

  return level;
}
