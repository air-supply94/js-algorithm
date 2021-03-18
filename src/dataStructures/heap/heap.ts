import { Comparator, compareFunctionType, getLeftChildIndex, getParentIndex, getRightChildIndex, hasLeftChild, hasParent, hasRightChild, leftChild, parent, rightChild, swap } from '../../utils';
import { HeapInterface } from './types';

export abstract class Heap<T = unknown> implements HeapInterface<T> {
  public get heapContainer(): T[] {
    return this._heapContainer;
  }

  protected constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this._heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  private readonly _heapContainer: T[];

  private removeValueBase(item: T, count: number, comparator?: Comparator): T[] {
    let i = 0;
    let removeIndex = this.findIndex(item, comparator);
    const result = [];

    while (i < count && removeIndex !== -1) {
      result.push(this.heapContainer[removeIndex]);

      if (removeIndex === this.heapContainer.length - 1) {
        this.heapContainer.pop();
        return result;
      } else {
        this.heapContainer[removeIndex] = this.heapContainer.pop();
        if (!hasParent(removeIndex, this.heapContainer.length) || this.pairIsInCorrectOrder(parent(this.heapContainer, removeIndex), this.heapContainer[removeIndex])) {
          this.down(removeIndex);
        } else {
          this.up(removeIndex);
        }

        i++;
        removeIndex = this.findIndex(item, comparator, removeIndex);
      }
    }
    return result;
  }

  protected compare: Comparator;

  protected abstract pairIsInCorrectOrder(firstElement: T, secondElement: T): boolean;

  public fromArray(value: T[]): this {
    value.forEach((item) => this.add(item));
    return this;
  }

  public sort(): T[] {
    const result = [];
    while (!this.isEmpty()) {
      result.push(this.poll());
    }
    return result;
  }

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

  public add(item: T): this {
    this.heapContainer.push(item);
    return this.up();
  }

  public findIndex(item: T, comparator = this.compare, fromIndex = 0): number {
    return this.heapContainer.findIndex((value) => comparator.equal(item, value), fromIndex);
  }

  public isEmpty(): boolean {
    return this.heapContainer.length <= 0;
  }

  public toString(): string {
    return this.heapContainer.toString();
  }

  public removeAll(item: T, comparator?: Comparator): T[] {
    return this.removeValueBase(item, Infinity, comparator);
  }

  public remove(item: T, comparator?: Comparator): T[] {
    return this.removeValueBase(item, 1, comparator);
  }

  public up(startIndex = this.heapContainer.length - 1): this {
    let i = startIndex;
    while (hasParent(i, this.heapContainer.length) && !this.pairIsInCorrectOrder(parent(this.heapContainer, i), this.heapContainer[i])) {
      swap(this.heapContainer, i, getParentIndex(i));
      i = getParentIndex(i);
    }
    return this;
  }

  public down(startIndex = 0): this {
    let i = startIndex;
    while (hasLeftChild(i, this.heapContainer.length)) {
      const nextIndex = hasRightChild(i, this.heapContainer.length) && this.pairIsInCorrectOrder(rightChild(this.heapContainer, i), leftChild(this.heapContainer, i))
        ? getRightChildIndex(i)
        : getLeftChildIndex(i);

      if (this.pairIsInCorrectOrder(this.heapContainer[i], this.heapContainer[nextIndex])) {
        return this;
      }

      swap(this.heapContainer, i, nextIndex);
      i = nextIndex;
    }
    return this;
  }
}
