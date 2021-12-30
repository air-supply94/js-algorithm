import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/same-tree/
// 100
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p) {
    return !q;
  }

  if (!q) {
    return !p;
  }

  if (p.val !== q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}
