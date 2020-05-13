import { FenwickTreeInterface } from './types';

export class FenwickTree implements FenwickTreeInterface {
  constructor(arraySize: number) {
    this.arraySize = arraySize;

    this.treeArray = Array(this.arraySize + 1)
    .fill(0);
  }

  private readonly arraySize: number;
  private readonly treeArray: number[];

  public increase(position: number, value: number): void {
    if (position < 1 || position > this.arraySize) {
      return;
    }

    for (let i = position; i <= this.arraySize; i += (i & -i)) {
      this.treeArray[i] += value;
    }
  }

  public query(position: number): number {
    if (position < 1 || position > this.arraySize) {
      return 0;
    }

    let sum = 0;

    for (let i = position; i > 0; i -= (i & -i)) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  public queryRange(leftIndex: number, rightIndex: number): number {
    if (leftIndex > rightIndex) {
      return 0;
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
