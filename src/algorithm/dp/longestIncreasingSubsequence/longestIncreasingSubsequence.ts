export function longestIncreasingSubsequence(numbers: number[]): number {
  if (numbers.length <= 1) {
    return numbers.length;
  }

  const dp = Array(numbers.length)
    .fill(0);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      } else {
        dp[i] = Math.max(dp[j], 1);
      }
    }
  }

  return dp[numbers.length - 1];
}
