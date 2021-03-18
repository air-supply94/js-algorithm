export function getLeftChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 1;
}

export function getRightChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 2;
}

export function getParentIndex(childIndex: number): number {
  return Math.floor((childIndex - 1) / 2);
}

export function hasParent(childIndex: number, length: number): boolean {
  return getParentIndex(childIndex) > -1 && getParentIndex(childIndex) < length;
}

export function hasLeftChild(parentIndex: number, length: number): boolean {
  return getLeftChildIndex(parentIndex) > -1 && getLeftChildIndex(parentIndex) < length;
}

export function hasRightChild(parentIndex: number, length: number): boolean {
  return getRightChildIndex(parentIndex) > -1 && getRightChildIndex(parentIndex) < length;
}

export function leftChild<T = unknown>(container: T[], parentIndex: number): T | undefined {
  return container[getLeftChildIndex(parentIndex)];
}

export function rightChild<T = unknown>(container: T[], parentIndex: number): T | undefined {
  return container[getRightChildIndex(parentIndex)];
}

export function parent<T = unknown>(container: T[], childIndex: number): T | undefined {
  return container[getParentIndex(childIndex)];
}
