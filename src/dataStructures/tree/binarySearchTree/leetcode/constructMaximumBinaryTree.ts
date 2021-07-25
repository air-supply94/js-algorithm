import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/maximum-binary-tree/
// 654
export function constructMaximumBinaryTree(num: number[]): TreeNode | null {
  return recursion(num, 0, num.length - 1);
}

function recursion(num: number[], startIndex: number, endIndex: number): TreeNode | null {
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
  root.left = recursion(num, startIndex, maxIndex - 1);
  root.right = recursion(num, maxIndex + 1, endIndex);
  return root;
}
