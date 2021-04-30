import { getLeftChildIndex, getRightChildIndex } from '../../../utils';

function initSegmentTree(inputArray: number[]): number[] {
  const length = Math.pow(2, Math.ceil(Math.log2(inputArray.length)));
  return new Array((2 * length) - 1).fill(null);
}

export class SegmentTree {
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    this.segmentTree = initSegmentTree(this.inputArray);

    this.buildTreeRecursively(0, this.inputArray.length - 1, 0);
  }

  public readonly operation: (...args: number[]) => number;

  public readonly operationFallback: number;

  public readonly inputArray: number[];

  public readonly segmentTree: number[];

  private buildTreeRecursively(leftInputIndex: number, rightInputIndex: number, position: number) {
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    const middleIndex = leftInputIndex + Math.floor((rightInputIndex - leftInputIndex) / 2);
    this.buildTreeRecursively(leftInputIndex, middleIndex, getLeftChildIndex(position));
    this.buildTreeRecursively(middleIndex + 1, rightInputIndex, getRightChildIndex(position));

    this.segmentTree[position] = this.operation(
      this.segmentTree[getLeftChildIndex(position)],
      this.segmentTree[getRightChildIndex(position)]
    );
  }

  private rangeQueryRecursive(queryLeftIndex: number, queryRightIndex: number, leftIndex: number, rightIndex: number, position: number): number {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.segmentTree[position];
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return this.operationFallback;
    }

    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const left = this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, middleIndex, getLeftChildIndex(position));
    const right = this.rangeQueryRecursive(queryLeftIndex, queryRightIndex, middleIndex + 1, rightIndex, getRightChildIndex(position));

    return this.operation(left, right);
  }

  public rangeQuery(queryLeftIndex: number, queryRightIndex: number): number {
    [
      queryLeftIndex,
      queryRightIndex,
    ] = [
      queryLeftIndex | 0,
      queryRightIndex | 0,
    ].sort();

    return this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      0,
      this.inputArray.length - 1,
      0
    );
  }
}
