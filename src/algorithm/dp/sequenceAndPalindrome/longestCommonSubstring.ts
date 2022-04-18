// https://www.lintcode.com/problem/79/#
export function longestCommonSubstring(string1: string, string2: string): number {
  const dp = Array(string2.length + 1)
    .fill(null)
    .map(() => Array(string1.length + 1)
      .fill(0));

  let result = 0;

  for (let height = 1; height <= string2.length; height++) {
    for (let width = 1; width <= string1.length; width++) {
      if (string1[width - 1] === string2[height - 1]) {
        dp[height][width] = dp[height - 1][width - 1] + 1;
      } else {
        dp[height][width] = 0;
      }

      result = Math.max(result, dp[height][width]);
    }
  }

  return result;
}

// https://www.lintcode.com/problem/79/#
/*
export function longestCommonSubstring(string1: string, string2: string): number {
  let result = 0;

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        let x = i;
        let y = j;
        while (x < string1.length && y < string2.length && string1[x] === string2[y]) {
          x++;
          y++;
          result = Math.max(x - i, result);
        }
      }
    }
  }
  return result;
}
*/
