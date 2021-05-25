export function longestIncreasingSubsequence(numbers: number[]): number {
  if (numbers.length <= 1) {
    return numbers.length;
  }

  const dp = Array(numbers.length)
    .fill(1);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);
}

export function longestIncreasingSubsequenceBs(numbers: number[]): number {
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
      const middleIndex = left + Math.floor((right - left) / 2);
      const middleValue = piles[middleIndex];

      if (currentValue < middleValue) {
        right = middleIndex - 1;
      } else if (currentValue === middleValue) {
        right = middleIndex - 1;
      } else {
        left = middleIndex + 1;
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
