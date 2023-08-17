// https://leetcode.cn/problems/coin-change-ii/
// 518
export function change(weight: number, weightList: number[]): number {
  const dp: number[] = Array(weight + 1)
    .fill(0);
  dp[0] = 1;

  for (let i = 1; i <= weightList.length; i++) {
    const prevDp = dp.slice();
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[w] = prevDp[w] + dp[subResult];
      } else {
        dp[w] = prevDp[w];
      }
    }
  }

  return dp[weight];
}

/*
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
*/
