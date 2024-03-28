// https://leetcode.cn/problems/3sum/?envType=study-plan-v2&envId=top-100-liked
// 15
// top100
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = new Set<string>();

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum === 0) {
        result.add([
          nums[i],
          nums[j],
          nums[k],
        ].join(','));

        j++;
        k--;
      } else {
        k--;
      }
    }
  }

  return Array.from(result)
    .map((item) => item.split(',')
      .map((val) => Number(val)));
}
