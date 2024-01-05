// https://leetcode-cn.com/problems/maximum-subarray/
// 53
export function maxSubArray(numbers: number[]): number {
  let currentSum = -Infinity;
  let result = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    currentSum = currentSum < 0 ? numbers[i] : currentSum + numbers[i];
    result = Math.max(currentSum, result);
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
  let maxValue = -Infinity;
  const dp = Array(width).fill(0);

  for (let startHeight = 0; startHeight < height; startHeight++) {
    dp.fill(0);
    for (let endHeight = startHeight; endHeight < height; endHeight++) {
      let currentSum = -Infinity;
      for (let startWidth = 0; startWidth < width; startWidth++) {
        // 当前矩形对应的列需要累加
        dp[startWidth] += matrix[endHeight][startWidth];
        if (currentSum < 0) {
          currentSum = dp[startWidth];
          startH = startHeight;
          startW = startWidth;
        } else {
          currentSum += dp[startWidth];
        }

        if (maxValue < currentSum) {
          maxValue = currentSum;
          result[0] = startH;
          result[1] = startW;
          result[2] = endHeight;
          result[3] = startWidth;
        }
      }
    }
  }
  return result;
}
