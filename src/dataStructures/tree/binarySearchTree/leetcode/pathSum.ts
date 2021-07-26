import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
// 剑指offer-34
export function pathSum(root: TreeNode | null, sum: number, result: number[][] = [], currentPath: number[] = []): number[][] {
  if (!root) {
    return result;
  }

  pathSumDfs(root, sum, result, currentPath);
  return result;
}

function pathSumDfs(root: TreeNode | null, sum: number, result: number[][], currentPath: number[]): void {
  if (!root) {
    return;
  }

  const newSum = sum - root.val;
  const newCurrentPath = currentPath.concat(root.val);
  if (newSum === 0 && !root.left && !root.right) {
    result.push(newCurrentPath);
  }

  pathSumDfs(root.left, newSum, result, newCurrentPath);
  pathSumDfs(root.right, newSum, result, newCurrentPath);
}
