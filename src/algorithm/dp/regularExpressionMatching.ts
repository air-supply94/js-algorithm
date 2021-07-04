const ZERO_OR_MORE_CHARS = '*';
const ANY_CHAR = '.';

// https://leetcode-cn.com/problems/regular-expression-matching/
// 10
export function regularExpressionMatching(text: string, pattern: string): boolean {
  return dp(text, pattern, 0, 0, new Map<string, boolean>());
}

function dp(text: string, pattern: string, i: number, j: number, cache: Map<string, boolean>): boolean {
  const key = `${i},${j}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  if (j === pattern.length) {
    return i === text.length;
  }

  const firstMatch = i < text.length && (pattern[j] === text[i] || pattern[j] === ANY_CHAR);
  let result: boolean;

  if (j <= pattern.length - 2 && pattern[j + 1] === ZERO_OR_MORE_CHARS) {
    result = dp(text, pattern, i, j + 2, cache) || (firstMatch && dp(text, pattern, i + 1, j, cache));
  } else {
    result = firstMatch && dp(text, pattern, i + 1, j + 1, cache);
  }

  cache.set(key, result);
  return result;
}
