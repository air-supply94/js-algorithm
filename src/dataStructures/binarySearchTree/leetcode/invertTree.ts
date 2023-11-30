import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/invert-binary-tree/
// 226
// top100
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }

  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/*
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const left = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = left;
  return root;
}
*/
