import { TreeNode } from './treeNode';

export function serializeLevelOrder(array: number[]): TreeNode | null {
  if (array.length === 0) {
    return null;
  }

  let i = 1;
  const root = new TreeNode(array[0]);
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length && i < array.length) {
    const currentNode = queue.shift();

    const leftValue = array[i];
    i++;
    if (leftValue != null) {
      currentNode.left = new TreeNode(leftValue);
      queue.push(currentNode.left);
    }

    if (i >= array.length) {
      return root;
    }

    const rightValue = array[i];
    i++;
    if (rightValue != null) {
      currentNode.right = new TreeNode(rightValue);
      queue.push(currentNode.right);
    }
  }

  return root;
}
