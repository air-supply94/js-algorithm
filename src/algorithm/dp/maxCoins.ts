// https://leetcode-cn.com/problems/burst-balloons/
// 312
export function maxCoins(nums: number[]): number {
  const length = nums.length + 2;
  const virtualNums: number[] = Array(length).fill(null);
  virtualNums[0] = 1;
  virtualNums[virtualNums.length - 1] = 1;
  for (let i = 0; i < nums.length; i++) {
    virtualNums[i + 1] = nums[i];
  }

  // (n1,n2)
  const dp: number[][] = Array(length)
    .fill(null)
    .map(() => Array(length)
      .fill(0));

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= length - 1; j++) {
      // 最后一个被戳破
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + virtualNums[i] * virtualNums[k] * virtualNums[j]);
      }
    }
  }

  return dp[0][nums.length + 1];
}
