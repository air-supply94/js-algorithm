import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
// 108
export function sortedArrayToBST(array: number[]): TreeNode {
  return initTreeNodes(array, 0, array.length - 1);
}

function initTreeNodes(array: number[], start: number, end: number): TreeNode {
  if (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    const node = new TreeNode(array[middle]);
    node.left = initTreeNodes(array, start, middle - 1);
    node.right = initTreeNodes(array, middle + 1, end);
    return node;
  } else {
    return null;
  }
}

