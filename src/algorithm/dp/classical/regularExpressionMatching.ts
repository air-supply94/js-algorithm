const ZERO_OR_MORE_CHARS = '*';
const ANY_CHAR = '.';

// https://leetcode-cn.com/problems/regular-expression-matching/
// 10
export function isMatch(text: string, pattern: string, i = 0, j = 0, cache = new Map<string, boolean>()): boolean {
  if (j === pattern.length) {
    return i === text.length;
  }

  const key = `${i},${j}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  const firstMatch = i < text.length && (pattern[j] === text[i] || pattern[j] === ANY_CHAR);
  let result: boolean;

  if (j <= pattern.length - 2 && pattern[j + 1] === ZERO_OR_MORE_CHARS) {
    const matchMore = firstMatch && isMatch(text, pattern, i + 1, j, cache);
    const matchZero = isMatch(text, pattern, i, j + 2, cache);
    result = matchMore || matchZero;
  } else {
    result = firstMatch && isMatch(text, pattern, i + 1, j + 1, cache);
  }

  cache.set(key, result);
  return result;
}
