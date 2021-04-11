export function maximumSubarray(numbers: number[]): number {
  if (!numbers.length) {
    return 0;
  }

  let maxSum = numbers[0];
  let currentSum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (currentSum > 0) {
      currentSum += numbers[i];
    } else {
      currentSum = numbers[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
