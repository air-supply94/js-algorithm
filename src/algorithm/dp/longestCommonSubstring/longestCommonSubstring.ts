export function longestCommonSubstring(string1: string, string2: string): string {
  const s1 = Array.from(string1);
  const s2 = Array.from(string2);

  const dp = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1)
      .fill(0));

  let maxLength = 0;
  let w = 0;
  let h = 0;

  for (let height = 1; height <= s2.length; height++) {
    for (let width = 1; width <= s1.length; width++) {
      if (s1[width - 1] === s2[height - 1]) {
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
    result = `${s1[w - 1]}${result}`;
    h--;
    w--;
  }
  return result;
}
