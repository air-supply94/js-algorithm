// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 300
export function lengthOfLIS(numbers: number[]): number {
  if (numbers.length <= 1) {
    return numbers.length;
  }

  // i结尾
  const dp = Array(numbers.length).fill(1);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);
}

// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 300
export function lengthOfLISBs(numbers: number[]): number {
  if (numbers.length <= 1) {
    return numbers.length;
  }

  const piles: number[] = [];
  piles[0] = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    let left = 0;
    let right = piles.length - 1;
    const currentValue = numbers[i];

    while (left <= right) {
      const middleIndex = (left + right) >>> 1;
      const middleValue = piles[middleIndex];

      if (currentValue < middleValue) {
        right = middleIndex - 1;
      } else if (currentValue === middleValue) {
        right = middleIndex - 1;
      } else {
        left = middleIndex + 1;
      }
    }

    if (left < piles.length && currentValue <= piles[left]) {
      piles[left] = currentValue;
    } else {
      piles.push(currentValue);
    }
  }
  return piles.length;
}
