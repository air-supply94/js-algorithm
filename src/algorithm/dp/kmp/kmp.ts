function getNext(str: string): number[] {
  const next: number[] = [];
  next[0] = -1;
  let i = 0;
  let j = -1;

  while (i < str.length) {
    if (j == -1 || str[i] == str[j]) {
      ++i;
      ++j;
      next[i] = j;
    } else {
      j = next[j];
    }
  }
  return next;
}

export function kmp(originStr: string, matchStr: string): number {
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
  }

  return -1;
}

function getNextDp(str: string): number[][] {
  const m = str.length;
  const dp = Array(m)
    .fill(null)
    .map(() => Array(256)
      .fill(0));

  dp[0][str.charCodeAt(0)] = 1;
  let x = 0;

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < 256; j++) {
      if (str.charCodeAt(i) === j) {
        dp[i][j] = i + 1;
      } else {
        dp[i][j] = dp[x][j];
      }
    }

    x = dp[x][str.charCodeAt(i)];
  }

  return dp;
}

export function kmpDp(originStr: string, matchStr: string): number {
  if (!matchStr.length) {
    return 0;
  }

  const m = matchStr.length;
  const n = originStr.length;
  const dp = getNextDp(matchStr);
  let j = 0;

  for (let i = 0; i < n; i++) {
    j = dp[j][originStr.charCodeAt(i)];
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
}
