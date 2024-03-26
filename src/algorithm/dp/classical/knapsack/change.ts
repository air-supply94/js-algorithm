// https://leetcode.cn/problems/coin-change-ii/
// 518
// 完全背包(数量无限)
export function change(weight: number, weightList: number[]): number {
  const dp: number[] = Array(weight + 1)
    .fill(0);
  dp[0] = 1;

  for (let i = 1; i <= weightList.length; i++) {
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[w] += dp[subResult];
      }
    }
  }

  return dp[weight];
}
