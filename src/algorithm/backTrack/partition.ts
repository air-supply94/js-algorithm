// https://leetcode.cn/problems/palindrome-partitioning/description/?envType=study-plan-v2&envId=top-100-liked
// 131
// top100
export function partition(s: string): string[][] {
  return Array.from(dfs(s)).map((item) => item.split(','));
}

function dfs(s: string, cache = new Map<string, Set<string>>()): Set<string> {
  if (s.length === 0) {
    return new Set();
  }

  if (cache.has(s)) {
    return cache.get(s);
  }

  const result = new Set<string>();
  if (s.split('').reverse().join('') === s) {
    result.add(s);
  }

  for (let i = 0; i < s.length - 1; i++) {
    const leftStr = s.slice(0, i + 1);
    const rightStr = s.slice(i + 1);
    const leftResult = dfs(leftStr, cache);
    const rightResult = dfs(rightStr, cache);

    for (const left of leftResult) {
      for (const right of rightResult) {
        result.add([left, right].join(','));
      }
    }
  }

  cache.set(s, result);
  return result;
}
