// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
// 128
// top100
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
    const preCache = cache[x - 1];
    const nextCache = cache[x + 1];
    let total = 1;

    if (preCache && nextCache) {
      total = preCache[2] + nextCache[2] + 1;
      cache[preCache[0]][1] = nextCache[1];
      cache[preCache[0]][2] = total;

      cache[nextCache[1]][0] = preCache[0];
      cache[nextCache[1]][2] = total;
    } else if (preCache) {
      total = preCache[2] + 1;
      cacheX[0] = preCache[0];
      cacheX[2] = total;

      cache[preCache[0]][1] = x;
      cache[preCache[0]][2] = total;
    } else if (nextCache) {
      total = nextCache[2] + 1;
      cacheX[1] = nextCache[1];
      cacheX[2] = total;

      cache[nextCache[1]][0] = x;
      cache[nextCache[1]][2] = total;
    }

    maxLength = Math.max(maxLength, total);
  }

  return maxLength;
}
