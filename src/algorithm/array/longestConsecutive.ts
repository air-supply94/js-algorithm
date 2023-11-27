// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
// 128
export function longestConsecutive(nums: number[]): number {
  let maxLength = 0;
  const cache: Record<number, number[]> = {};

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (cache[x] !== undefined) {
      continue;
    }

    const cacheX = [
      x,
      x,
      1,
    ];
    cache[x] = cacheX;

    const pre = x - 1;
    const next = x + 1;
    const preCache = cache[pre];
    const nextCache = cache[next];
    if (preCache && nextCache) {
      cacheX[0] = preCache[0];
      cacheX[1] = nextCache[1];
      cacheX[2] += preCache[2] + nextCache[2];

      preCache[1] = cacheX[1];
      preCache[2] = cacheX[2];
      cache[preCache[0]][1] = cacheX[1];
      cache[preCache[0]][2] = cacheX[2];

      nextCache[0] = cacheX[0];
      nextCache[2] = cacheX[2];
      cache[nextCache[1]][0] = cacheX[0];
      cache[nextCache[1]][2] = cacheX[2];
    } else if (preCache) {
      cacheX[0] = preCache[0];
      cacheX[2] += preCache[2];

      preCache[1] = x;
      preCache[2] = cacheX[2];

      cache[preCache[0]][1] = x;
      cache[preCache[0]][2] = cacheX[2];
    } else if (nextCache) {
      cacheX[1] = nextCache[1];
      cacheX[2] += nextCache[2];

      nextCache[0] = x;
      nextCache[2] = cacheX[2];

      cache[nextCache[1]][0] = x;
      cache[nextCache[1]][2] = cacheX[2];
    }

    maxLength = Math.max(maxLength, cacheX[2]);
  }

  return maxLength;
}
