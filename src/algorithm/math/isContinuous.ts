// 剑指 Offer 61
export function isContinuous(numbers: number[]): boolean {
  let bitMap = 0;
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      const currentBit = 1 << numbers[i];
      if ((bitMap & currentBit) !== 0) {
        return false;
      }

      bitMap |= currentBit;
      minValue = Math.min(minValue, numbers[i]);
      maxValue = Math.max(maxValue, numbers[i]);
    }
  }

  return maxValue - minValue < 5;
}
