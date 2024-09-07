import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 106
export function serializePostAndInOrder(
  inorder: number[],
  postorder: number[],
  inStartIndex = 0,
  inEndIndex = inorder.length - 1,
  postStartIndex = 0,
  postEndIndex = postorder.length - 1,
): TreeNode {
  if (postStartIndex > postEndIndex) {
    return null;
  }

  const rootValue = postorder[postEndIndex];
  const equalIndex = inorder.findIndex((item) => item === rootValue, inStartIndex);
  const size = equalIndex - inStartIndex + 1;
  const root = new TreeNode(rootValue);
  root.left = serializePostAndInOrder(inorder, postorder, inStartIndex, equalIndex - 1, postStartIndex, postStartIndex + size - 2);
  root.right = serializePostAndInOrder(inorder, postorder, equalIndex + 1, inEndIndex, postStartIndex + size - 1, postEndIndex - 1);
  return root;
}
