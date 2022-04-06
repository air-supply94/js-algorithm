import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
// 114
export function flatten(root: TreeNode | null): void {
  if (!root) {
    return null;
  }

  flatten(root.left);
  flatten(root.right);
  const left = root.left;
  const right = root.right;

  root.left = null;
  root.right = left;

  let current = root;
  while (current.right) {
    current = current.right;
  }
  current.right = right;
}
