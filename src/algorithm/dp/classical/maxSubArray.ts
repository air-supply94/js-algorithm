// https://leetcode-cn.com/problems/maximum-subarray/
// 53
export function maxSubArray(numbers: number[]): number {
  let pre = -Infinity;
  let result = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    pre = Math.max(pre + numbers[i], numbers[i]);
    result = Math.max(result, pre);
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
  const dp = Array(w).fill(0);
  let startH = 0;
  let startW = 0;
  let maxValue = -Infinity;

  for (let i = 0; i < h; i++) {
    dp.fill(0);
    for (let j = i; j < h; j++) {
      let pre = -Infinity;
      for (let k = 0; k < w; k++) {
        dp[k] += matrix[j][k];
        if (pre + dp[k] < dp[k]) {
          pre = dp[k];
          startH = i;
          startW = k;
        } else {
          pre += dp[k];
        }

        if (pre > maxValue) {
          maxValue = pre;
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
