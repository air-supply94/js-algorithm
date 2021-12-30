import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 236
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) {
    return null;
  } else if (left !== null && right !== null) {
    return root;
  } else if (left !== null) {
    return left;
  } else {
    return right;
  }
}

// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// 235
export function lowestCommonAncestorBst(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestorBst(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestorBst(root.right, p, q);
  } else {
    return root;
  }
}
