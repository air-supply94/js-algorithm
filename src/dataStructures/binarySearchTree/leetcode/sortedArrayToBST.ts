import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 108
export function sortedArrayToBST(array: number[], start = 0, end = array.length - 1): TreeNode {
  if (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    const node = new TreeNode(array[middle]);
    node.left = sortedArrayToBST(array, start, middle - 1);
    node.right = sortedArrayToBST(array, middle + 1, end);
    return node;
  } else {
    return null;
  }
}

