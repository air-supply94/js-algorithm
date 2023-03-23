// https://leetcode-cn.com/problems/similar-string-groups/
// 839
export function numSimilarGroups(str: string[]): number {
  const f = Array(str.length).fill(null);
  for (let i = 0; i < f.length; i++) {
    f[i] = i;
  }

  let count = f.length;

  function find(x: number): number {
    if (f[x] === x) {
      return x;
    } else {
      f[x] = find(f[x]);
      return f[x];
    }
  }

  function union(x: number, y: number) {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX !== parentY) {
      count--;
    }

    f[parentX] = parentY;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (check(str[i], str[j])) {
        union(i, j);
      }
    }
  }

  return count;
}

function check(str1: string, str2: string): boolean {
  let notMatchCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      notMatchCount++;
    }
  }

  return notMatchCount === 0 || notMatchCount === 2;
}
