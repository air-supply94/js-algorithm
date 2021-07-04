function recursion(val1: string, i: number, val2: string, j: number, cache: Map<string, number>): number {
  if (i === val1.length || j === val2.length) {
    return 0;
  }

  const key = `${i},${j}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  if (val1[i] === val2[j]) {
    const result = 1 + recursion(val1, i + 1, val2, j + 1, cache);
    cache.set(key, result);
    return result;
  } else {
    const result = Math.max(recursion(val1, i + 1, val2, j, cache), recursion(val1, i, val2, j + 1, cache));
    cache.set(key, result);
    return result;
  }
}

// https://leetcode-cn.com/problems/longest-common-subsequence/
// 1143
export function longestCommonSubsequenceRecursion(str1: string, str2: string): number {
  return recursion(str1, 0, str2, 0, new Map<string, number>());
}

// https://leetcode-cn.com/problems/longest-common-subsequence/
// 1143
export function longestCommonSubsequence(str1: string, str2: string): number {
  if (!str1.length || !str2.length) {
    return 0;
  }

  const height = str2.length;
  const width = str1.length;
  const dp: number[] = Array(width + 1)
    .fill(0);

  for (let i = 1; i <= height; i++) {
    let tmp = dp[0];
    dp[0] = 0;
    for (let j = 1; j <= width; j++) {
      const pre = tmp;
      tmp = dp[j];

      if (str2[i - 1] === str1[j - 1]) {
        dp[j] = 1 + pre;
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j]);
      }
    }
  }

  return dp[str1.length];
}
