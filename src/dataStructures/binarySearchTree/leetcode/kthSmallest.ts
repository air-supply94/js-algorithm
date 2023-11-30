import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
// 230
// top100
export function kthSmallest(root: TreeNode | null, k: number): number {
  let index = 0;
  let result: number = null;

  function dfs(node: TreeNode): void {
    if (node == null || result !== null) {
      return;
    }

    dfs(node.left);
    index++;
    if (index === k) {
      result = node.val;
      return;
    }
    dfs(node.right);
  }

  dfs(root);
  return result;
}
