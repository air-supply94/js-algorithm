import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/validate-binary-search-tree/
// 98
// top100
export function isValidBST(root: TreeNode | null): boolean {
  return recursion(root)[0] === 1;
}

function recursion(root: TreeNode | null): number[] {
  if (root == null) {
    return [
      1,

      // 最小值
      Infinity,

      // 最大值
      -Infinity,
    ];
  }

  const left = recursion(root.left);
  const right = recursion(root.right);

  if (left[0] === 1 && right[0] === 1 && root.val > left[2] && root.val < right[1]) {
    return [
      1,
      Math.min(left[1], root.val),
      Math.max(right[2], root.val),
    ];
  } else {
    return [0];
  }
}
