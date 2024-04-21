import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
// 1373
export function maxSumBST(root: TreeNode | null): number {
  let max = 0;

  function recursion(rootNode: TreeNode | null): number[] {
    if (rootNode == null) {
      return [1, Infinity, -Infinity, 0];
    }

    const left = recursion(rootNode.left);
    const right = recursion(rootNode.right);
    if (left[0] === 1 && right[0] === 1 && rootNode.val > left[2] && rootNode.val < right[1]) {
      const result = [1, Math.min(left[1], rootNode.val), Math.max(right[2], rootNode.val), left[3] + right[3] + rootNode.val];
      max = Math.max(max, result[3]);
      return result;
    } else {
      return [0];
    }
  }

  recursion(root);
  return max;
}
