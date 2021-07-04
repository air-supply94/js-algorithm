// https://leetcode-cn.com/problems/partition-equal-subset-sum/
// 416
export function canPartition(weightList: number[]): boolean {
  const sum = weightList.reduce((prev, current) => prev + current, 0);
  if (sum % 2 !== 0) {
    return false;
  }

  const count = weightList.length;
  const weight = Math.floor(sum / 2);
  const dp = Array(count + 1)
    .fill(null)
    .map(() => Array(weight + 1)
      .fill(false));
  for (let i = 0; i <= count; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= weight; w++) {
      if (w - weightList[i - 1] >= 0) {
        dp[i][w] = dp[i - 1][w] || dp[i - 1][w - weightList[i - 1]];
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[count][weight];
}
