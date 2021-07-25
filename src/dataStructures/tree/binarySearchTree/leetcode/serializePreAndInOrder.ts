import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 105
export function serializePreAndInOrder(preorder: number[], inorder: number[]): TreeNode | null {
  return recursion(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

function recursion(preorder: number[], preStartIndex: number, preEndIndex: number, inorder: number[], inStartIndex: number, inEndIndex: number): TreeNode {
  if (preStartIndex > preEndIndex) {
    return null;
  }

  const equalValue = preorder[preStartIndex];
  const equalIndex = inorder.findIndex((item) => item === equalValue, inStartIndex);
  const root = new TreeNode(equalValue);
  const size = equalIndex - inStartIndex + 1;

  root.left = recursion(preorder, preStartIndex + 1, size + preStartIndex - 1, inorder, inStartIndex, equalIndex - 1);
  root.right = recursion(preorder, size + preStartIndex, preEndIndex, inorder, equalIndex + 1, inEndIndex);
  return root;
}
