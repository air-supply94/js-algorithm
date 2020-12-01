import { getLeftChildIndex, getRightChildIndex } from '../../../utils/tree';
import { SegmentTreeInterface } from './types';

function isPowerOfTwo(number: number): boolean {
  return number > 1 && Math.pow(2, Math.log2(number) | 0) === number;
}

function initSegmentTree(inputArray: number[]): number[] {
  const length = isPowerOfTwo(inputArray.length) ? inputArray.length : Math.pow(2, 1 + Math.log2(inputArray.length) | 0);
  return new Array((2 * length) - 1).fill(null);
}

export class SegmentTree implements SegmentTreeInterface {
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    this.segmentTree = initSegmentTree(this.inputArray);

    this.buildTreeRecursively(0, this.inputArray.length - 1, 0);
  }

  private buildTreeRecursively(leftInputIndex: number, rightInputIndex: number, position: number) {
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    const middleIndex = (leftInputIndex + rightInputIndex) / 2 | 0;
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
    } else {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

      const leftOperationResult = this.rangeQueryRecursive(
        queryLeftIndex,
        queryRightIndex,
        leftIndex,
        middleIndex,
        getLeftChildIndex(position)
      );

      const rightOperationResult = this.rangeQueryRecursive(
        queryLeftIndex,
        queryRightIndex,
        middleIndex + 1,
        rightIndex,
        getRightChildIndex(position)
      );

      return this.operation(leftOperationResult, rightOperationResult);
    }
  }

  public readonly operation: (...args: number[]) => number;

  public readonly operationFallback: number;

  public readonly inputArray: number[];

  public readonly segmentTree: number[];

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
