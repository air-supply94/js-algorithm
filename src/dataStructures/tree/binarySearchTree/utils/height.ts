import { BinarySearchTreeNodeInterface } from '../types';
import { traverseLevelOrder } from './traverseLevelOrder';

export function getHeight<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  const level = traverseLevelOrder(root, (x) => true);
  if (level <= 1) {
    return 0;
  } else {
    return level - 1;
  }
}

export function getBalanceFactor<T = unknown>(root: BinarySearchTreeNodeInterface<T>): number {
  if (root) {
    return traverseLevelOrder(root.left, (x) => true) - traverseLevelOrder(root.right, (x) => true);
  } else {
    return 0;
  }
}
