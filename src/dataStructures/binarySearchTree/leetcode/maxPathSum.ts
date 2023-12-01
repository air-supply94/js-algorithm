import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/binary-tree-maximum-path-sum/?envType=study-plan-v2&envId=top-100-liked
// 124
// top100
export function maxPathSum(root: TreeNode | null): number {
  let result = -Infinity;
  function traverse(node: TreeNode): number {
    if (node == null) {
      return 0;
    }

    const left = Math.max(traverse(node.left), 0);
    const right = Math.max(traverse(node.right), 0);
    result = Math.max(result, node.val + left + right);

    return node.val + Math.max(left, right);
  }

  traverse(root);
  return result;
}
