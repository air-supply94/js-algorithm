// https://leetcode-cn.com/problems/freedom-trail/
// 514
export function findRotateSteps(ring: string, key: string): number {
  const positionMap = new Map<string, number[]>();

  for (let i = 0; i < ring.length; i++) {
    if (positionMap.has(ring[i])) {
      positionMap.get(ring[i]).push(i);
    } else {
      positionMap.set(ring[i], [i]);
    }
  }

  return dfs(ring, key, 0, 0, positionMap);
}

/**
 * 多叉树的遍历
 * 自顶向下
 * 当前选择 = ring中对应key的字母的位置(顺时针和逆时针)
 */
function dfs(
  ring: string,
  key: string,
  i: number,
  count: number,
  positionMap: Map<string, number[]>,
  cache = new Map<string, number>(),
): number {
  if (count === key.length) {
    return 0;
  }

  const cacheKey = `${i},${count}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  let result = Number.POSITIVE_INFINITY;
  const currentChoice = positionMap.get(key[count]);
  for (let j = 0; j < currentChoice.length; j++) {
    const dx = Math.abs(i - currentChoice[j]);
    const currentCost = Math.min(dx, ring.length - dx) + 1;
    const nextCost = dfs(ring, key, currentChoice[j], count + 1, positionMap, cache);
    result = Math.min(result, currentCost + nextCost);
  }

  cache.set(cacheKey, result);
  return result;
}
