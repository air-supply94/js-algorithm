import {
  Comparator,
  compareFunctionType,
  getLeftChildIndex,
  getParentIndex,
  getRightChildIndex,
  hasLeftChild,
  hasParent,
  hasRightChild,
  leftChild,
  parent,
  rightChild,
  swap,
} from '../../utils';
import { HeapInterface } from './types';

export abstract class Heap<T = unknown> implements HeapInterface<T> {

  get heapContainer() {
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
        break;
      }

      this.heapContainer[removeIndex] = this.heapContainer.pop();
      if (!hasParent(this.heapContainer, removeIndex) || this.pairIsInCorrectOrder(parent(this.heapContainer, removeIndex), this.heapContainer[removeIndex])) {
        this.down(removeIndex);
      } else {
        this.up(removeIndex);
      }

      i++;
      removeIndex = this.findIndex(item, comparator, removeIndex);
    }
    return result;
  }

  protected compare: Comparator;

  protected abstract pairIsInCorrectOrder(firstElement: T, secondElement: T): boolean;

  public fromArray(value: T[]): this {
    value.forEach(item => this.add(item));
    return this;
  }

  public sort(): T[] {
    const sortArray = [];
    while (!this.isEmpty()) {
      sortArray.push(this.poll());
    }
    return sortArray;
  }

  public peek(): T | undefined {
    return this.heapContainer[0];
  }

  public poll(): T | undefined {
    if (this.heapContainer.length <= 1) {
      return this.heapContainer.pop();
    }
    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.down();
    return item;
  }

  public add(item: T): this {
    this.heapContainer.push(item);
    return this.up();
  }

  public findIndex(item: T, comparator = this.compare, fromIndex = 0): number {
    return this.heapContainer.findIndex(value => comparator.equal(item, value), fromIndex);
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

  public remove(item: T, comparator?: Comparator): T [] {
    return this.removeValueBase(item, 1, comparator);
  }

  public up(customStartIndex = this.heapContainer.length - 1): this {
    while (hasParent(this.heapContainer, customStartIndex) && !this.pairIsInCorrectOrder(parent(this.heapContainer, customStartIndex), this.heapContainer[customStartIndex])) {
      swap(this.heapContainer, getParentIndex(customStartIndex), customStartIndex);
      customStartIndex = getParentIndex(customStartIndex);
    }
    return this;
  }

  public down(customStartIndex = 0): this {
    while (hasLeftChild(this.heapContainer, customStartIndex)) {
      const nextIndex = hasRightChild(this.heapContainer, customStartIndex) && this.pairIsInCorrectOrder(rightChild(this.heapContainer, customStartIndex), leftChild(this.heapContainer, customStartIndex))
        ? getRightChildIndex(customStartIndex)
        : getLeftChildIndex(customStartIndex);

      if (this.pairIsInCorrectOrder(this.heapContainer[customStartIndex], this.heapContainer[nextIndex])) {
        break;
      }

      swap(this.heapContainer, customStartIndex, nextIndex);
      customStartIndex = nextIndex;
    }
    return this;
  }
}
