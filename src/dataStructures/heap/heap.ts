import type { interfaces } from '../../types';

// https://leetcode.cn/problems/top-k-frequent-elements/description/?envType=study-plan-v2&envId=top-100-liked
// top100
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
    let childIndex = startIndex;
    let parentIndex = (childIndex - 1) >>> 1;

    while (parentIndex < childIndex && !this.pairIsInCorrectOrder(this.heapContainer[parentIndex], this.heapContainer[childIndex])) {
      const tmp = this.heapContainer[childIndex];
      this.heapContainer[childIndex] = this.heapContainer[parentIndex];
      this.heapContainer[parentIndex] = tmp;
      childIndex = parentIndex;
      parentIndex = (childIndex - 1) >>> 1;
    }
  }

  public down(startIndex = 0): void {
    let parentIndex = startIndex;
    let leftChildIndex = parentIndex * 2 + 1;

    while (leftChildIndex < this.heapContainer.length) {
      const rightChildIndex = parentIndex * 2 + 2;
      const nextIndex = rightChildIndex < this.heapContainer.length && this.pairIsInCorrectOrder(this.heapContainer[rightChildIndex], this.heapContainer[leftChildIndex])
        ? rightChildIndex
        : leftChildIndex;

      if (this.pairIsInCorrectOrder(this.heapContainer[parentIndex], this.heapContainer[nextIndex])) {
        return;
      }

      const tmp = this.heapContainer[parentIndex];
      this.heapContainer[parentIndex] = this.heapContainer[nextIndex];
      this.heapContainer[nextIndex] = tmp;
      parentIndex = nextIndex;
      leftChildIndex = parentIndex * 2 + 1;
    }
  }
}
