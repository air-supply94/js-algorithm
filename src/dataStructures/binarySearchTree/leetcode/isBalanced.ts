import { maxDepth } from './maxDepth';
import type { TreeNode } from './treeNode';

// 剑指 Offer 79
export function isBalanced(root: TreeNode): boolean {
  if (root === null) {
    return true;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  if (Math.abs(leftDepth - rightDepth) >= 2) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

/*
function isBalanced(root: TreeNode): boolean {
  return depth(root) !== -1;
}

function depth(root: TreeNode): number {
  if (!root) {
    return 0;
  }

  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);
  if (leftDepth === -1 || rightDepth === -1) {
    return -1;
  }

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}
*/
