import { BinarySearchTreeNode, setLeft, setRight } from '../binarySearchTree';
import { Heap } from '../heap';

export function huffmanTree(data: number[]): BinarySearchTreeNode<number> | null {
  const minHeap = new Heap<BinarySearchTreeNode<number>>((a, b) => a.value <= b.value);
  for (let i = 0; i < data.length; i++) {
    minHeap.add(new BinarySearchTreeNode(data[i]));
  }

  while (minHeap.heapContainer.length > 1) {
    const left = minHeap.poll();
    const right = minHeap.poll();

    const parent = new BinarySearchTreeNode(left.value + right.value);
    setLeft(parent, left);
    setRight(parent, right);
    minHeap.add(parent);
  }

  if (minHeap.isEmpty()) {
    return null;
  } else {
    return minHeap.poll();
  }
}
