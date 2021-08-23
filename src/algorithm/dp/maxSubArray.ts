// https://leetcode-cn.com/problems/maximum-subarray/
// 53
export function maxSubArray(numbers: number[]): number {
  let sum = numbers[0];
  let result = sum;

  for (let i = 1; i < numbers.length; i++) {
    if (sum <= 0) {
      sum = numbers[i];
    } else {
      sum += numbers[i];
    }

    result = Math.max(result, sum);
  }

  return result;
}

// https://leetcode-cn.com/problems/max-submatrix-lcci/
// 金典-17.24
export function getMaxMatrix(matrix: number[][]): number[] {
  const h = matrix.length;
  const w = matrix[0].length;
  const result = [
    0,
    0,
    0,
    0,
  ];
  const dp = Array(w)
    .fill(0);
  let startH = 0;
  let startW = 0;
  let sum = 0;
  let maxValue = -Infinity;

  for (let i = 0; i < h; i++) {
    dp.fill(0);
    for (let j = i; j < h; j++) {
      sum = 0;
      for (let k = 0; k < w; k++) {
        dp[k] += matrix[j][k];
        if (sum <= 0) {
          sum = dp[k];
          startH = i;
          startW = k;
        } else {
          sum += dp[k];
        }

        if (sum > maxValue) {
          maxValue = sum;
          result[0] = startH;
          result[1] = startW;
          result[2] = j;
          result[3] = k;
        }
      }
    }
  }
  return result;
}
