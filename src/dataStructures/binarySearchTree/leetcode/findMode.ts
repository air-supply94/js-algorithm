import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
// 501
export function findMode(root: TreeNode | null): number[] {
  let currentValue = Number.NaN;
  let currentCount = 0;
  let maxCount = 0;
  let maxResult: number[] = [];

  function dfs(tmpRoot: TreeNode) {
    if (tmpRoot == null) {
      return;
    }

    dfs(tmpRoot.left);
    if (tmpRoot.val === currentValue) {
      currentCount++;
    } else {
      currentValue = tmpRoot.val;
      currentCount = 1;
    }

    if (currentCount === maxCount) {
      maxResult.push(currentValue);
    } else if (currentCount > maxCount) {
      maxCount = currentCount;
      maxResult = [currentValue];
    }
    dfs(tmpRoot.right);
  }

  dfs(root);
  return maxResult;
}
