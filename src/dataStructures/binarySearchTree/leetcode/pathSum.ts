import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/path-sum-iii/?envType=study-plan-v2&envId=top-100-liked
// 437
// top100
export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root == null) {
    return 0;
  }

  return dfs(root, targetSum, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}

function dfs(root: TreeNode | null, targetSum: number, currentSum: number): number {
  if (root == null) {
    return 0;
  }

  currentSum += root.val;
  return dfs(root.left, targetSum, currentSum) + dfs(root.right, targetSum, currentSum) + (currentSum === targetSum ? 1 : 0);
}
