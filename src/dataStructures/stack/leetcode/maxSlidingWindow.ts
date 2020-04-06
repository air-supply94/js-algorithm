export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (!nums.length) {
    return [];
  }

  function getMax(items: number[]): number {
    return Math.max.apply(null, items);
  }

  const result = [];
  const tmp = [];

  for (let i = 0; i < Math.min(k, nums.length); i++) {
    tmp.push(nums[i]);
  }
  result.push(getMax(tmp));

  for (let i = k; i < nums.length; i++) {
    tmp.unshift();
    tmp.push(nums[i]);
    result.push(getMax(tmp));
  }

  return result;
}
