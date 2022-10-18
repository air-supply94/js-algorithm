// https://leetcode-cn.com/problems/coin-change-2/
// 518
export function change(weight: number, weightList: number[]): number {
  const dp = Array(weight + 1)
    .fill(0);
  dp[0] = 1;

  for (let i = 1; i <= weightList.length; i++) {
    for (let w = 1; w <= weight; w++) {
      if (w >= weightList[i - 1]) {
        dp[w] += dp[w - weightList[i - 1]];
      }
    }
  }

  return dp[weight];
}