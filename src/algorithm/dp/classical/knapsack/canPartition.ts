// https://leetcode-cn.com/problems/partition-equal-subset-sum/
// 416
// top100
// 子集背包
export function canPartition(weightList: number[]): boolean {
  let sum = 0;
  for (let i = 0; i < weightList.length; i++) {
    sum += weightList[i];
  }

  if (sum & 1) {
    return false;
  }

  const weight = sum / 2;
  const dp: boolean[] = Array(weight + 1)
    .fill(false);
  dp[0] = true;

  for (let i = 1; i <= weightList.length; i++) {
    const previousDp = dp.slice();
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[w] ||= previousDp[subResult];
      }
    }
  }

  return dp[weight];
}
