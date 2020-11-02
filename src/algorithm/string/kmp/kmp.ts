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
