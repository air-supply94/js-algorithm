import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/symmetric-tree/
// 101
export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isSameLeftAndRight(root.left, root.right);
}

function isSameLeftAndRight(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left == null) {
    return right == null;
  }

  if (right == null) {
    return left == null;
  }

  if (left.val !== right.val) {
    return false;
  } else {
    return isSameLeftAndRight(left.left, right.right) && isSameLeftAndRight(left.right, right.left);
  }
}
