import { serializeLevelOrder } from '../../../dataStructures/tree/binarySearchTree/leetcode/serializeLevelOrder';
import { BinarySearchTreeNodeInterface } from '../../../dataStructures/tree/binarySearchTree/types';

export function rubberHouseHard(numbers: number[]): number {
  return rubber(serializeLevelOrder<number>(numbers), new Map());
}

function rubber(root: BinarySearchTreeNodeInterface<number>|null, cache: Map<BinarySearchTreeNodeInterface<number>, number>): number {
  if (!root) {
    return 0;
  }

  if (cache.has(root)) {
    return cache.get(root);
  }

  const rubberRoot = root.value + (root.left ? rubber(root.left.left, cache) + rubber(root.left.right, cache) : 0) + (root.right ? rubber(root.right.left, cache) + rubber(root.right.right, cache) : 0);
  const rubberChild = rubber(root.left, cache) + rubber(root.right, cache);

  const result = Math.max(rubberRoot, rubberChild);
  cache.set(root, result);
  return result;
}
