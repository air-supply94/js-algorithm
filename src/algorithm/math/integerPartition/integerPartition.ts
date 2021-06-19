export function integerPartition(number: number): number {
  const dp = Array(number + 1)
    .fill(null)
    .map(() => {
      return Array(number + 1)
        .fill(null);
    });

  for (let i = 1; i <= number; i++) {
    dp[0][i] = 0;
  }

  for (let i = 0; i <= number; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (i > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - i];
      }
    }
  }

  return dp[number][number];
}
