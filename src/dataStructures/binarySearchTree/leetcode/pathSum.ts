import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
// 剑指offer-34
export function pathSum(root: TreeNode | null, sum: number, result: number[][] = [], currentPath: number[] = []): number[][] {
  if (root == null) {
    return result;
  }

  currentPath.push(root.val);

  const newSum = sum - root.val;
  if (newSum === 0 && !root.left && !root.right) {
    result.push(currentPath.slice());
  }

  pathSum(root.left, newSum, result, currentPath);
  pathSum(root.right, newSum, result, currentPath);

  currentPath.pop();
  return result;
}
