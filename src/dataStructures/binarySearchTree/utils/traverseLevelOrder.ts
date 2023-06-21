import type { interfaces } from '../../../types';

// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
// 102
// 简单改造
export function traverseLevelOrder<T = unknown>(
  root: interfaces.BinarySearchTreeNode<T> | null,
  callback: interfaces.BinarySearchTreeTraverseCallback<T>
): number {
  const queue: Array<interfaces.BinarySearchTreeNode<T>> = [];
  let level = 0;
  if (root) {
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

      if (tmpNode.left) {
        queue.push(tmpNode.left);
      }

      if (tmpNode.right) {
        queue.push(tmpNode.right);
      }
    }
  }

  return level;
}
