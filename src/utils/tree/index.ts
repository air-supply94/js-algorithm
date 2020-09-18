export function getLeftChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 1;
}

export function getRightChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 2;
}

export function getParentIndex(childIndex: number): number {
  return (childIndex - 1) >>> 1;
}

export function hasParent<T = unknown>(container: T[], childIndex: number): boolean {
  return getParentIndex(childIndex) > -1 && getParentIndex(childIndex) < container.length;
}

export function hasLeftChild<T = unknown>(container: T[], parentIndex: number): boolean {
  return getLeftChildIndex(parentIndex) > -1 && getLeftChildIndex(parentIndex) < container.length;
}

export function hasRightChild<T = unknown>(container: T[], parentIndex: number): boolean {
  return getRightChildIndex(parentIndex) > -1 && getRightChildIndex(parentIndex) < container.length;
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
