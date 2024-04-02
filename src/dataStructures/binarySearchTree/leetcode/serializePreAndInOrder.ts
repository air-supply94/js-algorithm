import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 105
// 剑指 Offer
// https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6
export function serializePreAndInOrder(preorder: number[], inorder: number[], preStartIndex = 0, preEndIndex: number = preorder.length - 1, inStartIndex = 0, inEndIndex: number = inorder.length - 1): TreeNode {
  if (preStartIndex > preEndIndex) {
    return null;
  }

  const equalValue = preorder[preStartIndex];
  const equalIndex = inorder.findIndex((item) => item === equalValue, inStartIndex);
  const root = new TreeNode(equalValue);
  const size = equalIndex - inStartIndex + 1;

  root.left = serializePreAndInOrder(preorder, inorder, preStartIndex + 1, size + preStartIndex - 1, inStartIndex, equalIndex - 1);
  root.right = serializePreAndInOrder(preorder, inorder, size + preStartIndex, preEndIndex, equalIndex + 1, inEndIndex);
  return root;
}
