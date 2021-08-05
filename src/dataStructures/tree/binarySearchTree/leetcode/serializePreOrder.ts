import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/serialize-and-deserialize-bst/submissions/
// 449
export function serializePreOrder(array: number[]): TreeNode | null {
  let i = 0;
  function serialize(): TreeNode | null {
    if (i >= array.length) {
      return null;
    }

    const value = array[i];
    i++;
    if (value === null) {
      return null;
    }

    const node = new TreeNode(value);
    node.left = serialize();
    node.right = serialize();
    return node;
  }

  return serialize();
}
