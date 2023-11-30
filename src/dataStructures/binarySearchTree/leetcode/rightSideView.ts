import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/binary-tree-right-side-view/?envType=study-plan-v2&envId=top-100-liked
// 199
// top100
export function rightSideView(root: TreeNode | null): number[] {
  const queue: TreeNode[] = [];
  const result: number[] = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === 0) {
        result.push(node.val);
      }

      if (node.right) {
        queue.push(node.right);
      }

      if (node.left) {
        queue.push(node.left);
      }
    }
  }

  return result;
}
