import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/invert-binary-tree/
// 226;
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const tmp = root.right;
  root.right = root.left;
  root.left = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
