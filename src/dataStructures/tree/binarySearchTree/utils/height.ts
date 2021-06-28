import { BinarySearchTreeNodeInterface } from '../types';
import { traverseLevelOrder } from './traverseLevelOrder';

export function getHeight<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  const level = traverseLevelOrder(root, () => true);
  if (level <= 1) {
    return 0;
  } else {
    return level - 1;
  }
}

export function getBalanceFactor<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  if (root) {
    return traverseLevelOrder(root.left, () => true) - traverseLevelOrder(root.right, () => true);
  } else {
    return 0;
  }
}
