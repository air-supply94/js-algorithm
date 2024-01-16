/* export function subarraySum(nums: number[], total: number): number {
  const prefixSum = Array(nums.length + 1)
    .fill(null);
  prefixSum[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let result = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (prefixSum[i] - prefixSum[j] === total) {
        result++;
      }
    }
  }
  return result;
}*/

// https://leetcode-cn.com/problems/subarray-sum-equals-k/
// 560
// top100
export function subarraySum(nums: number[], total: number): number {
  const prefixSum = new Map<number, number>();
  prefixSum.set(0, 1);

  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const sumJ = sum - total;
    if (prefixSum.has(sumJ)) {
      result += prefixSum.get(sumJ);
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return result;
}

// https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
// 304
export class NumMatrix {
  constructor(matrix: number[][]) {
    const height = matrix.length;
    const width = matrix[0].length;

    this.prefixSum = Array(height + 1).fill(null)
      .map(() => Array(width + 1).fill(0));
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= width; j++) {
        this.prefixSum[i][j] = this.prefixSum[i - 1][j] + (this.prefixSum[i][j - 1] - this.prefixSum[i - 1][j - 1]) + matrix[i - 1][j - 1];
      }
    }
  }

  private readonly prefixSum: number[][] = [];

  public sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (this.prefixSum[row2 + 1][col2 + 1] - this.prefixSum[row1][col2 + 1]) - (this.prefixSum[row2 + 1][col1] - this.prefixSum[row1][col1]);
  }
}
