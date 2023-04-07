// https://www.lintcode.com/problem/79/#
export function longestCommonSubstring(a: string, b: string): number {
  const height = a.length;
  const width = b.length;
  const dp: number[] = Array(width + 1).fill(0);
  let result = 0;

  for (let i = 1; i <= height; i++) {
    let nextPrevious = dp[0];
    dp[0] = 0;

    for (let j = 1; j <= width; j++) {
      const previous = nextPrevious;
      nextPrevious = dp[j];

      if (a[i - 1] === b[j - 1]) {
        dp[j] = previous + 1;
      } else {
        dp[j] = 0;
      }

      result = Math.max(result, dp[j]);
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
