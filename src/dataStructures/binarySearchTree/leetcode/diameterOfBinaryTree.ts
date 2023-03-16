import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/diameter-of-binary-tree/
// 543
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode): number {
    if (node == null) {
      return 0;
    }

    const leftLevel = dfs(node.left);
    const rightLevel = dfs(node.right);
    result = Math.max(result, leftLevel + rightLevel);
    return 1 + Math.max(leftLevel, rightLevel);
  }

  dfs(root);
  return result;
}
