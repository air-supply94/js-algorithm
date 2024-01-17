// https://leetcode-cn.com/problems/longest-common-subsequence/
// 1143
// top100
export function longestCommonSubsequenceRecursion(str1: string, str2: string, i = str1.length - 1, j = str2.length - 1, cache = new Map<string, number>()): number {
  if (i === -1 || j === -1) {
    return 0;
  }

  const key = `${i},${j}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  let result: number;
  if (str1[i] === str2[j]) {
    result = 1 + longestCommonSubsequenceRecursion(str1, str2, i - 1, j - 1, cache);
  } else {
    result = Math.max(longestCommonSubsequenceRecursion(str1, str2, i - 1, j, cache), longestCommonSubsequenceRecursion(str1, str2, i, j - 1, cache));
  }

  cache.set(key, result);
  return result;
}

// https://leetcode-cn.com/problems/longest-common-subsequence/
// 1143
// top100
export function longestCommonSubsequence(str1: string, str2: string): number {
  const height = str2.length;
  const width = str1.length;

  // i结尾的str1,j结尾的str2
  const dp: number[] = Array(width + 1).fill(0);

  for (let i = 1; i <= height; i++) {
    let topLeft = dp[0];
    for (let j = 1; j <= width; j++) {
      const tmp = dp[j];
      if (str2[i - 1] === str1[j - 1]) {
        dp[j] = 1 + topLeft;
      } else {
        dp[j] = Math.max(dp[j - 1], dp[j]);
      }
      topLeft = tmp;
    }
  }

  return dp[str1.length];
}
