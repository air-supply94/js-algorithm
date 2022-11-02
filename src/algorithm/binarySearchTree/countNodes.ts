import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/count-complete-tree-nodes/
// 222
export function countNodes(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  let leftHeight = 0;
  let left = root;
  while (left) {
    left = left.left;
    leftHeight++;
  }

  let rightHeight = 0;
  let right = root;
  while (right) {
    right = right.right;
    rightHeight++;
  }

  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}
