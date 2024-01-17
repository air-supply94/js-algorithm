// https://leetcode-cn.com/problems/longest-increasing-subsequence/
// 300
// top100
export function lengthOfLIS(numbers: number[]): number {
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
// top100
export function lengthOfLISBs(numbers: number[]): number {
  const piles: number[] = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    let left = 0;
    let right = piles.length - 1;
    const currentValue = numbers[i];

    while (left <= right) {
      const middleIndex = (left + right) >>> 1;
      if (piles[middleIndex] < currentValue) {
        left = middleIndex + 1;
      } else {
        right = middleIndex - 1;
      }
    }

    if (left < piles.length && piles[left] >= currentValue) {
      piles[left] = currentValue;
    } else {
      piles.push(currentValue);
    }
  }

  return piles.length;
}
