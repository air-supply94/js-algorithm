// https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/
// 698
export function canPartitionKSubsets(nums: number[], k: number): boolean {
  if (k > nums.length) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % k !== 0) {
    return false;
  }

  const target = sum / k;
  if (Math.max.apply(null, nums) > target) {
    return false;
  }

  return recursion(nums.sort((a, b) => a - b), k, 0, nums.map(() => 0), target, 0);
}

function recursion(nums: number[], restBucket: number, bucketSum: number, choice: number[], target: number, start: number): boolean {
  if (restBucket === 0) {
    return true;
  }

  if (bucketSum === target) {
    return recursion(nums, restBucket - 1, 0, choice, target, 0);
  }

  for (let i = start; i < nums.length; i++) {
    if (!choice[i]) {
      if (nums[i] + bucketSum <= target) {
        choice[i] = 1;
        if (recursion(nums, restBucket, bucketSum + nums[i], choice, target, start + 1)) {
          return true;
        }
        choice[i] = 0;
      }
    }
  }

  return false;
}
