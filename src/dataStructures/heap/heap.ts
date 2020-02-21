import { Comparator } from '../../utils/comparator';
import { swap } from '../../utils/swap';
import { compareFunctionType } from '../../utils/@types';
import { InterfaceHeap } from './@types';

export abstract class Heap<T> implements InterfaceHeap<T> {
  protected constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this._heapContainer = [];
    this.compare = comparatorFunction instanceof Comparator ? comparatorFunction : new Comparator(comparatorFunction);
  }

  private _heapContainer: T[];
  protected compare: Comparator;

  get heapContainer() {
    return this._heapContainer;
  }

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

  public getLeftChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  public getRightChildIndex(parentIndex: number): number {
    return parentIndex * 2 + 2;
  }

  public getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  public hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) > -1 && this.getParentIndex(childIndex) < this._heapContainer.length;
  }

  public hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) > -1 && this.getLeftChildIndex(parentIndex) < this._heapContainer.length;
  }

  public hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) > -1 && this.getRightChildIndex(parentIndex) < this._heapContainer.length;
  }

  public leftChild(parentIndex: number): T {
    return this._heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  public rightChild(parentIndex: number): T {
    return this._heapContainer[this.getRightChildIndex(parentIndex)];
  }

  public parent(childIndex: number): T {
    return this._heapContainer[this.getParentIndex(childIndex)];
  }

  public peek(): T {
    return this._heapContainer[0];
  }

  public poll(): T {
    if (this._heapContainer.length <= 1) {
      return this._heapContainer.pop();
    }
    const item = this._heapContainer[0];
    this._heapContainer[0] = this._heapContainer.pop();
    this.down();
    return item;
  }

  public add(item: T): this {
    this._heapContainer.push(item);
    return this.up();
  }

  public findIndex(item?: any, comparator = this.compare, fromIndex = 0): number {
    return this._heapContainer.findIndex(value => comparator.equal(item, value), fromIndex);
  }

  public isEmpty(): boolean {
    return this._heapContainer.length <= 0;
  }

  public toString(): string {
    return this._heapContainer.toString();
  }

  public remove(item: T, comparator?: Comparator): T | null {
    let removeIndex = this.findIndex(item, comparator);
    const result = removeIndex === -1 ? null : item;
    while (removeIndex !== -1) {
      if (removeIndex === this._heapContainer.length - 1) {
        this._heapContainer.pop();
        break;
      }
      this._heapContainer[removeIndex] = this._heapContainer.pop();
      if (!this.hasParent(removeIndex) || this.pairIsInCorrectOrder(this.parent(removeIndex), this._heapContainer[removeIndex])) {
        this.down(removeIndex);
      } else {
        this.up(removeIndex);
      }
      removeIndex = this.findIndex(item, comparator);
    }
    return result;
  }

  public up(customStartIndex = this._heapContainer.length - 1): this {
    while (this.hasParent(customStartIndex) && !this.pairIsInCorrectOrder(this.parent(customStartIndex), this._heapContainer[customStartIndex])) {
      swap(this._heapContainer, this.getParentIndex(customStartIndex), customStartIndex);
      customStartIndex = this.getParentIndex(customStartIndex);
    }
    return this;
  }

  public down(customStartIndex = 0): this {
    while (this.hasLeftChild(customStartIndex)) {
      const nextIndex = this.hasRightChild(customStartIndex) && this.pairIsInCorrectOrder(this.rightChild(customStartIndex), this.leftChild(customStartIndex))
        ? this.getRightChildIndex(customStartIndex)
        : this.getLeftChildIndex(customStartIndex);

      if (this.pairIsInCorrectOrder(this._heapContainer[customStartIndex], this._heapContainer[nextIndex])) {
        break;
      }

      swap(this._heapContainer, customStartIndex, nextIndex);
      customStartIndex = nextIndex;
    }
    return this;
  }
}
