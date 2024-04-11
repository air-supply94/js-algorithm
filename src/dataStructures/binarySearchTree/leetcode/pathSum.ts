import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/path-sum-iii/?envType=study-plan-v2&envId=top-100-liked
// 437
// top100
export function pathSum(root: TreeNode | null, currentSum: number): number {
  if (root == null) {
    return 0;
  }

  return dfs(root, currentSum) + pathSum(root.left, currentSum) + pathSum(root.right, currentSum);
}

function dfs(root: TreeNode | null, currentSum: number): number {
  if (root == null) {
    return 0;
  }

  currentSum -= root.val;
  return dfs(root.left, currentSum) + dfs(root.right, currentSum) + (currentSum === 0 ? 1 : 0);
}
