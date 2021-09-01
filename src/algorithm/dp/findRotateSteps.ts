// https://leetcode-cn.com/problems/freedom-trail/
// 514
export function findRotateSteps(ring: string, key: string): number {
  const cache = new Map<string, number>();
  const positionMap = new Map<string, number[]>();

  for (let i = 0; i < ring.length; i++) {
    if (positionMap.has(ring[i])) {
      positionMap.get(ring[i]).push(i);
    } else {
      positionMap.set(ring[i], [i]);
    }
  }

  return recursion(ring, key, 0, 0, positionMap, cache);
}

function recursion(ring: string, key: string, position: number, count: number, positionMap: Map<string, number[]>, cache: Map<string, number>): number {
  if (count === key.length) {
    return 0;
  }

  const cacheKey = `${count},${position}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  let result = Infinity;

  const currentPosition: number[] = positionMap.get(key[count]);
  for (let i = 0; i < currentPosition.length; i++) {
    const dx = Math.abs(position - currentPosition[i]);
    const currentCost = Math.min(dx, ring.length - dx) + 1;
    const nextCost = recursion(ring, key, currentPosition[i], count + 1, positionMap, cache);
    result = Math.min(result, currentCost + nextCost);
  }

  cache.set(cacheKey, result);
  return result;
}
