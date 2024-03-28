// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
// 128
// top100
export function longestConsecutive(nums: number[]): number {
  const valueSet = new Set<number>(nums);
  for (let i = 0; i < nums.length; i++) {
    valueSet.add(nums[i]);
  }

  let maxLength = 0;
  for (const value of valueSet) {
    if (!valueSet.has(value - 1)) {
      let currentValue = value;
      let currentMax = 1;
      while (valueSet.has(currentValue + 1)) {
        currentValue++;
        currentMax++;
      }

      maxLength = Math.max(maxLength, currentMax);
    }
  }
  return maxLength;
}

/*
export function longestConsecutive(nums: number[]): number {
  let maxLength = 0;
  const cache: Record<number, number[]> = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (cache[currentValue] !== undefined) {
      continue;
    }

    const cacheCurrent = [
      currentValue,
      currentValue,
      1,
    ];
    cache[currentValue] = cacheCurrent;
    const preCache = cache[currentValue - 1];
    const nextCache = cache[currentValue + 1];
    let total = 1;

    if (preCache && nextCache) {
      total += preCache[2] + nextCache[2];
      const leftValue = preCache[0];
      const rightValue = nextCache[1];

      cache[leftValue][1] = rightValue;
      cache[leftValue][2] = total;

      cache[rightValue][0] = leftValue;
      cache[rightValue][2] = total;
    } else if (preCache) {
      total += preCache[2];
      const leftValue = preCache[0];
      cacheCurrent[0] = leftValue;
      cacheCurrent[2] = total;

      cache[leftValue][1] = currentValue;
      cache[leftValue][2] = total;
    } else if (nextCache) {
      total += nextCache[2];
      const rightValue = nextCache[1];
      cacheCurrent[1] = rightValue;
      cacheCurrent[2] = total;

      cache[rightValue][0] = currentValue;
      cache[rightValue][2] = total;
    }

    maxLength = Math.max(maxLength, total);
  }

  return maxLength;
}
*/
