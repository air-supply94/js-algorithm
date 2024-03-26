// https://www.lintcode.com/problem/79/#
export function longestCommonSubstring(a: string, b: string): number {
  const height = a.length;
  const width = b.length;

  // i结尾的str1,j结尾的str2
  const dp: number[] = Array(width + 1).fill(0);
  let result = 0;

  for (let i = 1; i <= height; i++) {
    let topLeft = dp[0];

    for (let j = 1; j <= width; j++) {
      const tmp = dp[j];

      if (a[i - 1] === b[j - 1]) {
        dp[j] = topLeft + 1;
      } else {
        dp[j] = 0;
      }

      topLeft = tmp;
      result = Math.max(result, dp[j]);
    }
  }
  return result;
}
