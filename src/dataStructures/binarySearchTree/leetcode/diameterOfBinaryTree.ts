import type { TreeNode } from './treeNode';

// https://leetcode.cn/problems/diameter-of-binary-tree/
// 543
// top100
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode): number {
    if (node == null) {
      return 0;
    }

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);
    result = Math.max(result, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);
  return result;
}
