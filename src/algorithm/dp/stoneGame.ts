// https://leetcode-cn.com/problems/stone-game/
// 更一般的解法
// 877
export function stoneGame(piles: number[]): boolean {
  const n = piles.length;

  // [n1,n2]先选和后选获取的stone个数
  const dp: number[][][] = Array(n)
    .fill(null)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => [0, 0]),
    );

  for (let i = 0; i < n; i++) {
    dp[i][i][0] = piles[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      const choiceLeft = piles[i] + dp[i + 1][j][1];
      const choiceRight = piles[j] + dp[i][j - 1][1];

      if (choiceLeft > choiceRight) {
        dp[i][j][0] = choiceLeft;
        dp[i][j][1] = dp[i + 1][j][1];
      } else {
        dp[i][j][0] = choiceRight;
        dp[i][j][1] = dp[i][j - 1][1];
      }
    }
  }

  return dp[0][n - 1][0] > dp[0][n - 1][1];
}
