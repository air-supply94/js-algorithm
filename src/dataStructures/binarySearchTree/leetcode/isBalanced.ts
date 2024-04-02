import type { TreeNode } from './treeNode';

// 剑指 Offer
// https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222
export function isBalanced(root: TreeNode): boolean {
  return maxDepth(root) !== -1;
}

function maxDepth(root: TreeNode): number {
  if (root == null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  if (leftDepth === -1) {
    return -1;
  }

  const rightDepth = maxDepth(root.right);
  if (rightDepth === -1) {
    return -1;
  }

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }

  return Math.max(leftDepth, rightDepth) + 1;
}
