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

  const targetSum = sum / k;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > targetSum) {
      return false;
    }
  }

  return dfs(nums.sort((a, b) => a - b), k, 0, Array(nums.length).fill(0), 0, targetSum);
}

function dfs(nums: number[], bucketCount: number, currentBucketSum: number, visitedIndex: number[], currentIndex: number, targetSum: number): boolean {
  if (bucketCount === 0) {
    return true;
  }

  if (currentBucketSum > targetSum) {
    return false;
  }

  if (currentBucketSum === targetSum) {
    return dfs(nums, bucketCount - 1, 0, visitedIndex, 0, targetSum);
  }

  for (let i = currentIndex; i < nums.length; i++) {
    if (visitedIndex[i] === 0) {
      visitedIndex[i] = 1;
      if (dfs(nums, bucketCount, currentBucketSum + nums[i], visitedIndex, currentIndex + 1, targetSum)) {
        return true;
      }
      visitedIndex[i] = 0;
    }
  }

  return false;
}
