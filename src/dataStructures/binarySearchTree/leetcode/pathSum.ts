import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
// 剑指offer-34
export function pathSum(root: TreeNode | null, sum: number, result: number[][] = [], currentPath: number[] = []): number[][] {
  if (root == null) {
    return result;
  }

  currentPath.push(root.val);

  sum -= root.val;
  if (sum === 0 && !root.left && !root.right) {
    result.push(currentPath.slice());
  }

  pathSum(root.left, sum, result, currentPath);
  pathSum(root.right, sum, result, currentPath);

  currentPath.pop();
  return result;
}
