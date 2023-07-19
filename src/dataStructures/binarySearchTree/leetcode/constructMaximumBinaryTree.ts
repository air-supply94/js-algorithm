import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/maximum-binary-tree/
// 654
export function constructMaximumBinaryTree(num: number[], startIndex = 0, endIndex = num.length - 1): TreeNode | null {
  if (startIndex > endIndex) {
    return null;
  }

  let maxIndex = -1;
  let maxValue = -Infinity;

  for (let i = startIndex; i <= endIndex; i++) {
    if (num[i] > maxValue) {
      maxIndex = i;
      maxValue = num[i];
    }
  }

  const root = new TreeNode(maxValue);
  root.left = constructMaximumBinaryTree(num, startIndex, maxIndex - 1);
  root.right = constructMaximumBinaryTree(num, maxIndex + 1, endIndex);
  return root;
}
