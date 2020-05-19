export interface SegmentTreeInterface {
  operation: (...args: number[]) => number;
  operationFallback: number;
  inputArray: number[];
  segmentTree: number[];
  rangeQuery(queryLeftIndex: number, queryRightIndex: number): number;
}
