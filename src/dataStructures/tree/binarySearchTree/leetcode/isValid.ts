import { BinarySearchTreeNodeInterface } from '../types';

export function isValid(root: BinarySearchTreeNodeInterface<number> | null): boolean {
  return recursion(root, -Infinity, Infinity);
}

function recursion(rootNode: BinarySearchTreeNodeInterface<number> | null, min: number, max: number): boolean {
  if (!rootNode) {
    return true;
  }

  if (rootNode.value <= min) {
    return false;
  }

  if (rootNode.value >= max) {
    return false;
  }

  return recursion(rootNode.left, min, rootNode.value) && recursion(rootNode.right, rootNode.value, max);
}
