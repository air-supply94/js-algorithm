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
