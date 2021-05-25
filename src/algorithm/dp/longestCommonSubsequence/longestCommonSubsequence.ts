function recursion(val1: string, i: number, val2: string, j: number, cache: Map<string, number>): number {
  if (i === val1.length || j === val2.length) {
    return 0;
  }

  const key = `${i},${j}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  if (val1[i] === val2[j]) {
    const result = 1 + recursion(val1, i + 1, val2, j + 1, cache);
    cache.set(key, result);
    return result;
  } else {
    const result = Math.max(
      recursion(val1, i + 1, val2, j, cache),
      recursion(val1, i, val2, j + 1, cache)
    );
    cache.set(key, result);
    return result;
  }
}

export function longestCommonSubsequenceRecursion(str1: string, str2: string): number {
  return recursion(str1, 0, str2, 0, new Map<string, number>());
}

export function longestCommonSubsequenceDp(str1: string, str2: string): number {
  return 0;
}
