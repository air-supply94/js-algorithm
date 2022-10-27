export function integerPartition(number: number): number {
  const dp = Array(number + 1)
    .fill(null)
    .map(() => Array(number + 1)
      .fill(0));

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

// https://www.cnblogs.com/hoodlum1980/archive/2008/10/11/1308493.html
export function integerPartitionDfs(n: number, max: number, cache = new Map<string, number>()): number {
  if (n === 1 || max === 1) {
    return 1;
  }

  const key = `${n},${max}`;
  let value: number;
  if (cache.has(key)) {
    return cache.get(key);
  }

  if (n < max) {
    value = integerPartitionDfs(n, n);
  } else if (n === max) {
    value = 1 + integerPartitionDfs(n, max - 1);
  } else {
    value = integerPartitionDfs(n - max, max) + integerPartitionDfs(n, max - 1);
  }

  cache.set(key, value);
  return value;
}
