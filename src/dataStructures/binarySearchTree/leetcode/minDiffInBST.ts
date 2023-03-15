import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
// 783
export function minDiffInBST(root: TreeNode | null): number {
  let min = Infinity;
  let pre: number | null = null;

  function dfs(tmpRoot: TreeNode) {
    if (tmpRoot == null) {
      return;
    }

    dfs(tmpRoot.left);
    if (pre === null) {
      pre = tmpRoot.val;
    } else {
      min = Math.min(tmpRoot.val - pre, min);
      pre = tmpRoot.val;
    }
    dfs(tmpRoot.right);
  }

  dfs(root);
  return min;
}
