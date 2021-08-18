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

  return dfs(nums.sort((a, b) => a - b), k, 0, Array(nums.length).fill(0), 0, target);
}

function dfs(nums: number[], currentBucket: number, bucketSum: number, visitedIndex: number[], currentIndex: number, target: number): boolean {
  if (currentBucket === 0) {
    return true;
  }

  if (bucketSum === target) {
    return dfs(nums, currentBucket - 1, 0, visitedIndex, 0, target);
  }

  for (let i = currentIndex; i < nums.length; i++) {
    if (!visitedIndex[i]) {
      if (nums[i] + bucketSum <= target) {
        visitedIndex[i] = 1;
        if (dfs(nums, currentBucket, bucketSum + nums[i], visitedIndex, currentIndex + 1, target)) {
          return true;
        }
        visitedIndex[i] = 0;
      }
    }
  }

  return false;
}
