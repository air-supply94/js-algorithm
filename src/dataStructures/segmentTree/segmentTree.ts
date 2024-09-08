import type { interfaces } from '../../types';

function getLeftChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 1;
}

function getRightChildIndex(parentIndex: number): number {
  return parentIndex * 2 + 2;
}

function initSegmentTree(inputArray: number[]): number[] {
  const height = Math.ceil(Math.log2(inputArray.length));
  return new Array(Math.pow(2, height + 1) - 1).fill(null);
}

// https://zhuanlan.zhihu.com/p/436326746
export class SegmentTree implements interfaces.SegmentTree {
  constructor(inputArray: number[], operation: (...args: number[]) => number, operationFallback: number) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    this.segmentTree = initSegmentTree(this.inputArray);

    this.buildTreeRecursively(0, this.inputArray.length - 1, 0);
  }

  private readonly operation: (...args: number[]) => number;

  private readonly operationFallback: number;

  private readonly inputArray: number[];

  private readonly segmentTree: number[];

  private buildTreeRecursively(leftInputIndex: number, rightInputIndex: number, position: number) {
    if (leftInputIndex > rightInputIndex) {
      return;
    }

    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    const middleIndex = leftInputIndex + Math.floor((rightInputIndex - leftInputIndex) / 2);
    this.buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position));
    this.buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position));

    this.segmentTree[position] = this.operation(
      this.segmentTree[getLeftChildIndex(position)],
      this.segmentTree[getRightChildIndex(position)],
    );
  }

  private rangeQueryRecursive(
    queryLeftIndex: number,
    queryRightIndex: number,
    leftIndex: number,
    rightIndex: number,
    position: number,
  ): number {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.segmentTree[position];
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return this.operationFallback;
    }

    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const left = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      middleIndex,
      getLeftChildIndex(position),
    );
    const right = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      middleIndex + 1,
      rightIndex,
      getRightChildIndex(position),
    );

    return this.operation(left, right);
  }

  public rangeQuery(queryLeftIndex: number, queryRightIndex: number): number {
    [queryLeftIndex, queryRightIndex] = [queryLeftIndex | 0, queryRightIndex | 0].sort();

    return this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, 0, this.inputArray.length - 1, 0);
  }
}
