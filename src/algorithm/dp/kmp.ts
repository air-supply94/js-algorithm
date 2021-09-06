function getNext(str: string): number[] {
  const dp: number[] = Array(str.length + 1).fill(null);
  dp[0] = -1;
  let i = 0;
  let j = -1;

  while (i < str.length) {
    if (j == -1 || str[i] == str[j]) {
      ++i;
      ++j;
      dp[i] = j;
    } else {
      j = dp[j];
    }
  }
  return dp;
}

// https://leetcode-cn.com/problems/implement-strstr/
// 28
export function strStr(originStr: string, matchStr: string): number {
  let i = 0;
  let j = 0;
  const next = getNext(matchStr);

  while (i < originStr.length && j < matchStr.length) {
    if (j == -1 || originStr[i] == matchStr[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  if (j == matchStr.length) {
    return i - j;
  } else {
    return -1;
  }
}

