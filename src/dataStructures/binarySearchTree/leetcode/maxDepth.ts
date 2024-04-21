import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
// 104
// top100
export function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
