// https://leetcode-cn.com/problems/maximum-subarray/
// 53
// 剑指offer 42
export function maxSubArray(numbers: number[]): number {
  let currentSum = -Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    currentSum = Math.max(numbers[i], currentSum + numbers[i]);
    maxValue = Math.max(currentSum, maxValue);
  }

  return maxValue;
}

// 剑指offer 85
export function maxSubArray2(array: number[]): number[] {
  let resultLeft = 0;
  let resultRight = 0;
  let left = 0;
  let maxValue = array[0];

  let currentSum = array[0];
  for (let right = 1; right < array.length; right++) {
    if (currentSum >= 0) {
      currentSum += array[right];
    } else {
      currentSum = array[right];
      left = right;
    }

    // 子数组和更大
    // 子数组和相等的情况下区间要更长
    if (currentSum > maxValue || currentSum === maxValue && (resultRight - resultLeft < right - left)) {
      maxValue = currentSum;
      resultLeft = left;
      resultRight = right;
    }
  }

  return array.splice(resultLeft, resultRight - resultLeft + 1);
}

// https://leetcode-cn.com/problems/max-submatrix-lcci/
// 金典-17.24
export function getMaxMatrix(matrix: number[][]): number[] {
  const height = matrix.length;
  const width = matrix[0].length;
  const result: number[] = Array(4).fill(0);
  let startH = 0;
  let startW = 0;
  let maxValue = -Infinity;
  const dp: number[] = Array(width).fill(0);

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
