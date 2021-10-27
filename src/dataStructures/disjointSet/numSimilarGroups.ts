// https://leetcode-cn.com/problems/similar-string-groups/
// 839
export function numSimilarGroups(list: string[]): number {
  const f = Array(list.length).fill(null);
  let count = f.length;
  for (let i = 0; i < list.length; i++) {
    f[i] = i;
  }

  function find(x: number): number {
    if (f[x] === x) {
      return x;
    } else {
      f[x] = find(f[x]);
      return f[x];
    }
  }

  function union(x: number, y: number): void {
    if (find(x) !== find(y)) {
      count--;
    }
    f[find(x)] = find(y);
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (check(list[i], list[j])) {
        union(i, j);
      }
    }
  }

  return count;
}

function check(s1: string, s2: string): boolean {
  let notMatchCount = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      notMatchCount++;
    }
  }

  return notMatchCount === 0 || notMatchCount === 2;
}
