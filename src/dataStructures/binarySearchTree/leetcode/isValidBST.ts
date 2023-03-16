import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/validate-binary-search-tree/
// 98
export function isValidBST(root: TreeNode | null): boolean {
  return recursion(root)[0] === 1;
}

function recursion(rootNode: TreeNode | null): number[] {
  if (rootNode == null) {
    return [
      1,

      // 最小值
      Infinity,

      // 最大值
      -Infinity,
    ];
  }

  const left = recursion(rootNode.left);
  const right = recursion(rootNode.right);

  if (left[0] === 1 && right[0] === 1 && rootNode.val > left[2] && rootNode.val < right[1]) {
    return [
      1,
      Math.min(left[1], rootNode.val),
      Math.max(right[2], rootNode.val),
    ];
  } else {
    return [0];
  }
}
