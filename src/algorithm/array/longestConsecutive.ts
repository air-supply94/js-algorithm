// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
// 128
// top100
export function longestConsecutive(nums: number[]): number {
  const valueSet = new Set<number>(nums);
  for (let i = 0; i < nums.length; i++) {
    valueSet.add(nums[i]);
  }

  let maxLength = 0;
  for (const currentValue of valueSet) {
    if (!valueSet.has(currentValue - 1)) {
      let maxValue = currentValue;
      while (valueSet.has(maxValue + 1)) {
        maxValue++;
      }

      maxLength = Math.max(maxLength, maxValue - currentValue + 1);
    }
  }
  return maxLength;
}
