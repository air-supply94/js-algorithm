// 剑指 Offer 74
export function findContinuousSequence(sum: number, n = 100): number[][] {
  const result: number[][] = [];
  let left = 1;
  let right = 1;
  let currentSum = 0;

  while (right <= n) {
    currentSum += right;
    right++;
    while (currentSum >= sum) {
      if (currentSum === sum && right - left > 1) {
        const oneResult: number[] = [];
        for (let i = left; i < right; i++) {
          oneResult.push(i);
        }

        result.push(oneResult);
      }

      currentSum -= left;
      left++;
    }
  }

  return result;
}
