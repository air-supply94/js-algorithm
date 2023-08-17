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
  const dp = Array(weight + 1)
    .fill(false);
  dp[0] = true;

  for (let i = 1; i <= count; i++) {
    const previousDp = dp.slice();
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[w] = previousDp[w] || previousDp[subResult];
      } else {
        dp[w] = previousDp[w];
      }
    }
  }

  return dp[weight];
}
