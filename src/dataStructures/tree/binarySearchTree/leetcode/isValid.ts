import { BinarySearchTreeNode } from '../binarySearchTree';

export function isValid(root: BinarySearchTreeNode<number> | null): boolean {
  return recursion(root)[0] === 1;
}

function recursion(rootNode: BinarySearchTreeNode<number> | null): number[] {
  if (!rootNode) {
    return [
      1,
      Infinity,
      -Infinity,
    ];
  }

  const left = recursion(rootNode.left);
  const right = recursion(rootNode.right);

  if (left[0] === 1 && right[0] === 1 && rootNode.value > left[2] && rootNode.value < right[1]) {
    return [
      1,
      Math.min(left[1], rootNode.value),
      Math.max(right[2], rootNode.value),
    ];
  } else {
    return [0];
  }
}
