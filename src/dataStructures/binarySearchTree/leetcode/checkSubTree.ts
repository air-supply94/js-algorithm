import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/check-subtree-lcci/
// 剑指offer
// https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88
export function checkSubTree(root: TreeNode | null, childRoot: TreeNode | null): boolean {
  if (childRoot == null) {
    return true;
  }

  if (root == null) {
    return false;
  }

  if (isSubTree(root, childRoot)) {
    return true;
  }

  return checkSubTree(root.left, childRoot) || checkSubTree(root.right, childRoot);
}

function isSubTree(root: TreeNode | null, childRoot: TreeNode | null): boolean {
  if (childRoot == null) {
    return root == null;
  }

  if (root == null) {
    return false;
  }

  if (root.val !== childRoot.val) {
    return false;
  }

  return isSubTree(root.left, childRoot.left) && isSubTree(root.right, childRoot.right);
}
