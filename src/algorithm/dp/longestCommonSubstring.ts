// https://www.lintcode.com/problem/79/#
export function longestCommonSubstring(string1: string, string2: string): string {
  const dp = Array(string2.length + 1)
    .fill(null)
    .map(() => Array(string1.length + 1)
      .fill(0));

  let maxLength = 0;
  let w = 0;
  let h = 0;

  for (let height = 1; height <= string2.length; height++) {
    for (let width = 1; width <= string1.length; width++) {
      if (string1[width - 1] === string2[height - 1]) {
        dp[height][width] = dp[height - 1][width - 1] + 1;
      } else {
        dp[height][width] = 0;
      }

      if (dp[height][width] > maxLength) {
        maxLength = dp[height][width];
        w = width;
        h = height;
      }
    }
  }

  let result = '';
  while (dp[h][w] > 0) {
    result = `${string1[w - 1]}${result}`;
    h--;
    w--;
  }
  return result;
}
