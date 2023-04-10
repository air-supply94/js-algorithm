// https://leetcode-cn.com/problems/partition-equal-subset-sum/
// 416
export function canPartition(weightList: number[]): boolean {
  let sum = 0;
  for (let i = 0; i < weightList.length; i++) {
    sum += weightList[i];
  }

  if (sum & 1) {
    return false;
  }

  const count = weightList.length;
  const weight = sum / 2;
  const dp = Array(count + 1)
    .fill(null)
    .map(() => Array(weight + 1)
      .fill(false));
  for (let i = 0; i <= count; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[i][w] = dp[i - 1][w] || dp[i - 1][subResult];
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[count][weight];
}
