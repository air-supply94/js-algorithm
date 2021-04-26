import { BinarySearchTreeNodeInterface } from '../types';

export function maxSumTree(root: BinarySearchTreeNodeInterface<number> | null): number {
  let max = 0;

  function recursion(rootNode: BinarySearchTreeNodeInterface<number> | null): number[] {
    if (!rootNode) {
      return [
        1,
        Infinity,
        -Infinity,
        0,
      ];
    }

    const left = recursion(rootNode.left);
    const right = recursion(rootNode.right);
    if (left[0] === 1 && right[0] === 1 && rootNode.value > left[2] && rootNode.value < right[1]) {
      const result = [
        1,
        Math.min(left[1], rootNode.value),
        Math.max(right[2], rootNode.value),
        left[3] + right[3] + rootNode.value,
      ];
      max = Math.max(max, result[3]);
      return result;
    } else {
      return [0];
    }
  }

  recursion(root);
  return max;
}

