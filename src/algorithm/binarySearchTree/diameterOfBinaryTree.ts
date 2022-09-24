import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/diameter-of-binary-tree/
// 543
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode): number {
    if (node == null) {
      return 0;
    }

    const leftResult = dfs(node.left);
    const rightResult = dfs(node.right);
    result = Math.max(result, leftResult + rightResult);
    return 1 + Math.max(leftResult, rightResult);
  }

  dfs(root);
  return result;
}
