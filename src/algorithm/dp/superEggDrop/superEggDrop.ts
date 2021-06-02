export function superEggDrop(count: number, n: number): number {
  return recursion(count, n, new Map<string, number>());
}

function recursion(count: number, n: number, cache: Map<string, number>): number {
  if (count === 1) {
    return n;
  }

  if (n < 1) {
    return 0;
  }

  const key = `${count},${n}`;
  if (cache.has(key)) {
    return cache.get(key);
  }

  let result = Infinity;

  for (let i = 1; i <= n; i++) {
    result = Math.min(
      result,
      Math.max(recursion(count - 1, i - 1, cache), recursion(count, n - i, cache)) + 1
    );
  }

  cache.set(key, result);
  return result;
}
