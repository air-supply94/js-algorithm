export function longestIncreasingSubsequence(numbers: number[]): number {
  if (numbers.length <= 1) {
    return numbers.length;
  }

  const dp = Array(numbers.length)
    .fill(1);

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      } else {
        dp[i] = Math.max(dp[i], 1);
      }
    }
  }

  return dp[numbers.length - 1];
}
