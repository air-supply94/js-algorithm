// https://leetcode-cn.com/problems/maximum-subarray/
// 53
export function maxSubArray(numbers: number[]): number {
  let dp_i_0 = -Infinity;
  let result = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    dp_i_0 = dp_i_0 < 0 ? numbers[i] : dp_i_0 + numbers[i];
    result = result < dp_i_0 ? dp_i_0 : result;
  }

  return result;
}

// https://leetcode-cn.com/problems/max-submatrix-lcci/
// 金典-17.24
export function getMaxMatrix(matrix: number[][]): number[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const result = [
    0,
    0,
    0,
    0,
  ];
  let startH = 0;
  let startW = 0;
  const dp = Array(width).fill(0);
  let maxValue = -Infinity;

  for (let i = 0; i < height; i++) {
    dp.fill(0);
    for (let j = i; j < height; j++) {
      let dp_i_0 = -Infinity;
      for (let k = 0; k < width; k++) {
        dp[k] += matrix[j][k];
        if (dp_i_0 < 0) {
          dp_i_0 = dp[k];
          startH = i;
          startW = k;
        } else {
          dp_i_0 += dp[k];
        }

        if (maxValue < dp_i_0) {
          maxValue = dp_i_0;
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
