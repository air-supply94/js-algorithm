// https://leetcode-cn.com/problems/maximum-subarray/
// 53
export function maxSubArray(numbers: number[]): number {
  if (!numbers.length) {
    return 0;
  }

  let dp_0 = numbers[0];
  let dp_1 = 0;
  let result = dp_0;

  for (let i = 1; i < numbers.length; i++) {
    dp_1 = Math.max(numbers[i], dp_0 + numbers[i]);
    dp_0 = dp_1;
    result = Math.max(result, dp_1);
  }

  return result;
}
