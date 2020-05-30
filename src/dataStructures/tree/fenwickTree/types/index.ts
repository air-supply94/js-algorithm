export interface FenwickTreeInterface {
  increase: (position: number, value: number) => void;
  query: (position: number) => number;
  queryRange: (leftIndex: number, rightIndex: number) => number;
}
