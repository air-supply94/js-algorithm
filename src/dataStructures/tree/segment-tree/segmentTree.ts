function isPowerOfTwo(number: number): boolean {
  return number > 1 && Math.pow(2, Math.log2(number) | 0) === number;
}

export class SegmentTree {
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray;
    this.operation = operation;
    this.operationFallback = operationFallback;

    this.segmentTree = this.initSegmentTree(this.inputArray);

    this.buildSegmentTree();
  }

  private readonly operation: (...args: number[]) => number;
  private readonly operationFallback: number;
  private readonly inputArray: number[];

  private initSegmentTree(inputArray: number[]): number[] {
    let segmentTreeArrayLength;
    const inputArrayLength = inputArray.length;

    if (isPowerOfTwo(inputArrayLength)) {
      segmentTreeArrayLength = (2 * inputArrayLength) - 1;
    } else {
      const nextPowerOfTwoNumber = Math.pow(2, Math.ceil(Math.log2(inputArrayLength)));
      segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1;
    }

    return new Array(segmentTreeArrayLength).fill(null);
  }

  private buildSegmentTree(): void {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;
    this.buildTreeRecursively(leftIndex, rightIndex, position);
  }

  private buildTreeRecursively(leftInputIndex: number, rightInputIndex: number, position: number) {
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex];
      return;
    }

    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);
    this.buildTreeRecursively(leftInputIndex, middleIndex, this.getLeftChildIndex(position));
    this.buildTreeRecursively(middleIndex + 1, rightInputIndex, this.getRightChildIndex(position));

    this.segmentTree[position] = this.operation(
      this.segmentTree[this.getLeftChildIndex(position)],
      this.segmentTree[this.getRightChildIndex(position)],
    );
  }

  private rangeQueryRecursive(queryLeftIndex: number, queryRightIndex: number, leftIndex: number, rightIndex: number, position: number): number {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.segmentTree[position];
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return this.operationFallback;
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    const leftOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      middleIndex,
      this.getLeftChildIndex(position),
    );

    const rightOperationResult = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      middleIndex + 1,
      rightIndex,
      this.getRightChildIndex(position),
    );

    return this.operation(leftOperationResult, rightOperationResult);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 2;
  }

  public readonly segmentTree: number[];

  public rangeQuery(queryLeftIndex: number, queryRightIndex: number): number {
    const leftIndex = 0;
    const rightIndex = this.inputArray.length - 1;
    const position = 0;

    return this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex,
      position,
    );
  }
}
