import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
// 501
export function findMode(root: TreeNode | null): number[] {
  let current = NaN;
  let count = 0;
  let maxCount = 0;
  let result: number[] = [];

  function dfs(tmpRoot: TreeNode) {
    if (!tmpRoot) {
      return;
    }

    dfs(tmpRoot.left);
    if (tmpRoot.val === current) {
      count++;
    } else {
      current = tmpRoot.val;
      count = 1;
    }

    if (count === maxCount) {
      result.push(current);
    } else if (count > maxCount) {
      maxCount = count;
      result = [current];
    }
    dfs(tmpRoot.right);
  }

  dfs(root);
  return result;
}
