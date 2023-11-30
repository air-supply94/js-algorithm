import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/symmetric-tree/
// 101
// top100
export function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }

  return isSameLeftAndRight(root.left, root.right);
}

function isSameLeftAndRight(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left == null) {
    return right == null;
  }

  if (right == null) {
    return false;
  }

  if (left.val !== right.val) {
    return false;
  }

  return isSameLeftAndRight(left.left, right.right) && isSameLeftAndRight(left.right, right.left);
}
