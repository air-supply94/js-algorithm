import type { interfaces } from '../../types';

// https://zhuanlan.zhihu.com/p/435561765
export class FenwickTree implements interfaces.FenwickTree {
  constructor(arraySize: number) {
    this.arraySize = arraySize;
    this.treeArray = Array(this.arraySize + 1)
      .fill(0);
  }

  private readonly arraySize: number;

  private readonly treeArray: number[];

  public query(position: number): number {
    if (position < 1 || position > this.arraySize) {
      return 0;
    }

    let sum = 0;
    for (let i = position; i > 0; i -= i & -i) {
      sum += this.treeArray[i];
    }
    return sum;
  }

  public increase(position: number, value: number): void {
    if (position >= 1 && position <= this.arraySize) {
      for (let i = position; i <= this.arraySize; i += i & -i) {
        this.treeArray[i] += value;
      }
    }
  }

  public queryRange(leftIndex: number, rightIndex: number): number {
    if (leftIndex > rightIndex) {
      return 0;
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
