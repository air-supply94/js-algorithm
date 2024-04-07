import { TreeNode } from './treeNode';

// 剑指offer
// https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5
export function Convert(root: TreeNode): TreeNode {
  if (root == null) {
    return null;
  }

  let minNode:TreeNode;

  let previousNode: TreeNode = null;
  function dfs(node: TreeNode) {
    if (node == null) {
      return;
    }

    dfs(node.left);
    if (minNode == null) {
      minNode = node;
    }

    if (previousNode) {
      previousNode.right = node;
      node.left = previousNode;
    }
    previousNode = node;
    dfs(node.right);
  }

  dfs(root);

  return minNode;
}
