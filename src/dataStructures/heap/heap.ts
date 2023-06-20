import { swap } from '../../utils';
import type { interfaces } from '../../types';

function getParentIndex(childIndex: number): number {
  return Math.floor((childIndex - 1) / 2);
}

function hasParent(childIndex: number, length: number): boolean {
  return getParentIndex(childIndex) > -1 && getParentIndex(childIndex) < length;
}

function parent<T = unknown>(container: T[], childIndex: number): T | undefined {
  return container[getParentIndex(childIndex)];
}

function getLeftChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 1;
}

function hasLeftChild(parentIndex: number, length: number): boolean {
  return getLeftChildIndex(parentIndex) > -1 && getLeftChildIndex(parentIndex) < length;
}

function leftChild<T = unknown>(container: T[], parentIndex: number): T | undefined {
  return container[getLeftChildIndex(parentIndex)];
}

function getRightChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 2;
}

function hasRightChild(parentIndex: number, length: number): boolean {
  return getRightChildIndex(parentIndex) > -1 && getRightChildIndex(parentIndex) < length;
}

function rightChild<T = unknown>(container: T[], parentIndex: number): T | undefined {
  return container[getRightChildIndex(parentIndex)];
}

export class Heap<T = unknown> implements interfaces.Heap<T> {
  constructor(pairIsInCorrectOrder: (firstElement: T, secondElement: T) => boolean) {
    this.heapContainer = [];
    this.pairIsInCorrectOrder = pairIsInCorrectOrder;
  }

  private readonly pairIsInCorrectOrder: (firstElement: T, secondElement: T) => boolean;

  public readonly heapContainer: T[];

  public peek(): T | undefined {
    return this.heapContainer[0];
  }

  public poll(): T | undefined {
    if (this.heapContainer.length <= 1) {
      return this.heapContainer.pop();
    } else {
      const item = this.heapContainer[0];
      this.heapContainer[0] = this.heapContainer.pop();
      this.down();
      return item;
    }
  }

  public add(item: T): void {
    this.heapContainer.push(item);
    this.up();
  }

  public isEmpty(): boolean {
    return this.heapContainer.length <= 0;
  }

  public up(startIndex = this.heapContainer.length - 1): void {
    let i = startIndex;
    while (hasParent(i, this.heapContainer.length) && !this.pairIsInCorrectOrder(parent(this.heapContainer, i), this.heapContainer[i])) {
      swap(this.heapContainer, i, getParentIndex(i));
      i = getParentIndex(i);
    }
  }

  public down(startIndex = 0): void {
    let i = startIndex;
    while (hasLeftChild(i, this.heapContainer.length)) {
      const nextIndex = hasRightChild(i, this.heapContainer.length) && this.pairIsInCorrectOrder(rightChild(this.heapContainer, i), leftChild(this.heapContainer, i))
        ? getRightChildIndex(i)
        : getLeftChildIndex(i);

      if (this.pairIsInCorrectOrder(this.heapContainer[i], this.heapContainer[nextIndex])) {
        return;
      }

      swap(this.heapContainer, i, nextIndex);
      i = nextIndex;
    }
  }
}
