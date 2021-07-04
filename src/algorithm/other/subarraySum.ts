/* export function subarraySum(nums: number[], total: number): number {
  const prefixSum = Array(nums.length + 1)
    .fill(null);
  prefixSum[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let result = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (prefixSum[i] - prefixSum[j] === total) {
        result++;
      }
    }
  }
  return result;
}*/

// https://leetcode-cn.com/problems/subarray-sum-equals-k/
// 560
export function subarraySum(nums: number[], total: number): number {
  const prefixSum = new Map<number, number>();
  prefixSum.set(0, 1);

  let result = 0;
  let sum_i = 0;

  for (let i = 0; i < nums.length; i++) {
    sum_i += nums[i];
    const sum_j = sum_i - total;
    if (prefixSum.has(sum_j)) {
      result += prefixSum.get(sum_j);
    }
    prefixSum.set(sum_i, (prefixSum.get(sum_i) || 0) + 1);
  }

  return result;
}
